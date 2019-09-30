var fs = require("fs")

//clients of MCAPI
const mcServices = require("./mcServices")
const exportCSV = require("./exportCSV")
const cosmos = require("./cosmos")
const utility = require("./utility")
const analyze = require("./analyze")

const config = require('./config');


(async () => {

    const ms_output_path = './Output/Modelset/'
    const clash_output_path = './Output/Clash/'
    const index_output_path = './Output/Index/'


    try {
        //clear output folder
        await utility.clearFolder(ms_output_path)
        await utility.clearFolder(clash_output_path)
        await utility.clearFolder(index_output_path)

        console.log('---Dummping MC data of the container: ' + config.mc.mc_container_id)

        //model sets collection
        const mc_container_id = config.mc.mc_container_id
        console.log('   msoverview: ' + ms_output_path + mc_container_id + '-msoverview.json')
        let msoverview = await mcServices.getModelSets(mc_container_id)
        await utility.saveJsonObj(ms_output_path, mc_container_id + '-msoverview.json', msoverview)

        //get info of one specific model set
        const ms_id = config.mc.ms_id //or get one from the model sets collection
        console.log('   msinfo: ' + ms_output_path + ms_id + '-msinfo.json')
        let msinfo = await mcServices.getModelSet(mc_container_id, ms_id)
        await utility.saveJsonObj(ms_output_path, ms_id + '-msinfo.json', msinfo)

        //tipversion
        const ms_v_id = msinfo.tipVersion //or get one from the model versions

        console.log('   msversions: ' + ms_output_path + ms_id + '-msversions.json')
        //get versions info of one specific model set 
        let msversions = await mcServices.getModelSetVersions(mc_container_id, ms_id)
        await utility.saveJsonObj(ms_output_path, ms_id + '-msversions.json', msversions)

        //get info of specific version
        console.log('   msversion: ' + ms_output_path, ms_id + '-' + ms_v_id + '-msversion.json')
        let msversion = await mcServices.getModelSetVersion(mc_container_id, ms_id, ms_v_id)
        await utility.saveJsonObj(ms_output_path, ms_id + '-' + ms_v_id + '-msversion.json', msversion)

        //get manifest
        console.log('   msVIndexManifest: ' + index_output_path, ms_id + '-' + ms_v_id + '-msVIndexManifest.json')
        let msVIndexManifest = await mcServices.queryModelSetVersionIndexManifest(mc_container_id, ms_id, ms_v_id)
        await utility.saveJsonObj(index_output_path, ms_id + '-' + ms_v_id + '-manifest.json', msVIndexManifest)

        //Index Fields 
        let msVIndexFields = await mcServices.queryModelSetVersionIndexFields(mc_container_id, ms_id, ms_v_id)
        let resurl = msVIndexFields.url
        let headers = msVIndexFields.headers
        let filename = resurl.split("/").slice(-1)[0];
        filename = ms_id + '-' + ms_v_id + '-' + filename
        let downloadRes = await utility.downloadResources(resurl, headers, index_output_path, filename)
        console.log('   msVIndexFields : ' + index_output_path + filename)

        //Index result
        var query =
            "select s.file, s.db, s.docs, s.id, s.p153cb174 as name,s.p20d8441e as category, s.p30db51f9 as family, s.p13b6b3a0 as type from s3object s where count(s.docs)>0"
        let queryIndexJob = await mcServices.QueryIndex(mc_container_id, ms_id, ms_v_id, query)
        let status = 'running'
        let jobStatus = null
        while (status == 'running') {
            jobStatus = await mcServices.getJob(mc_container_id, ms_id, queryIndexJob.jobId)
            status = jobStatus.status
        }
        let indexResultFile = ''
        if (status == 'Succeeded') {
            resurl = jobStatus.resources.results.url
            headers = jobStatus.resources.results.headers
            filename = resurl.split("/").slice(-1)[0];
            filename = ms_id + '-' + ms_v_id + '-' + filename
            indexResultFile = filename
            let downloadRes = await utility.downloadResources(resurl, headers, index_output_path, filename)
            console.log('   Index Result: ' + index_output_path + filename)
        }

        //Clash Result
        let clashTestsRes = await mcServices.getClashTests(mc_container_id, ms_id)
        console.log('   clashTestsRes : ' + clash_output_path, ms_id + '-' + ms_id + '-clashTestsRe.json')
        await utility.saveJsonObj(clash_output_path, ms_id + '-clashTestsRe.json', clashTestsRes)

        //one model set version with one clash test
        let oneTest = clashTestsRes.tests.filter(function (item) {
            return item.modelSetVersion === ms_v_id;
        })

        // one clash test data
        if (oneTest && oneTest.length > 0) {
            let testid = oneTest[0].id
            let ms_v_id = oneTest[0].modelSetVersion
            let ms_id = oneTest[0].modelSetId
            let testRes = await mcServices.getClashTestResources(mc_container_id, testid)
            for (let index in testRes.resources) {
                let resurl = testRes.resources[index].url
                let headers = testRes.resources[index].headers
                let filename = resurl.split("/").slice(-1)[0];
                filename = ms_id + '-' + ms_v_id + '-' + filename
                let downloadRes = await utility.downloadResources(resurl, headers, clash_output_path, filename)
                console.log('   Clash Data: ' + index_output_path + filename)
            }
        }

        //analyze clash data
        console.log('   Analyzing clash data: ' + index_output_path + filename)

        //matrix view  
        var matrixView = analyze.produceMatrixView(ms_id, ms_v_id)
        //breakdown view
        var breakdownView = analyze.produceBreakdownView(ms_id, ms_v_id)

        //object & clash view of one pair of models for PowerBI
        /// config.mc.modelsNamePair :['{3D}_Audubon_Architecture.rvt','{3D}_Audubon_Structure.rvt'] 

        //analyze the data
        var indexResultsJson = await utility.readLinesFile(index_output_path + indexResultFile)
        const analyzeModelPair = await analyze.modelPairClash1(config.mc.modelsNamePair, ms_id, ms_v_id, indexResultsJson)

        //way 1: export file and import to PowerBI manually
        exportCSV.exportCSV(index_output_path, 'demo.csv', analyzeModelPair)

        //way 2: post to Cosmos database, and import data with PBPowerBI
        const databaseDefinition = { id: "bim360_mc_api" };
        const collectionDefinition = { id: 'demo_test_new' };

        var cosmosDB_container = await cosmos.createClient(databaseDefinition, collectionDefinition)

        //hit the limit of large request rate.
        //await Promise.all(analyzeModelPair.map((eachRecord) => cosmosDB_container.items.create(eachRecord)));
        //console.log(itemDefs.length + " items created");


        const sliceNumber = 100
        var spliceArray = chunkArrayInGroups(analyzeModelPair, sliceNumber)
        for (let i in spliceArray) {
            await Promise.all(spliceArray[i].map((eachRecord) => cosmosDB_container.items.create(eachRecord)))
            console.log(spliceArray[i].length + " items created");
        }

    }
    catch (e) {
        console.error(e)
    }
})();

function chunkArrayInGroups(arr, size) {
    var myArray = [];
    for (var i = 0; i < arr.length; i += size) {
        myArray.push(arr.slice(i, i + size));
    }
    return myArray;
}


