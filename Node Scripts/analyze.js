const fs = require("fs");
const utility = require("./utility")

const ms_output_path = './Output/Modelset/'
const clash_output_path = './Output/Clash/'
const index_output_path = './Output/Index/'

async function modelPairClash(modelsNamePair, ms_id, ms_v_id, indexResultsJson) {

  return new Promise((resolve, reject) => {


    var clashDocumentBuffer = fs.readFileSync(clash_output_path + ms_id +
      '-' + ms_v_id + '-scope-version-document.2.0.0.json.gz')
    var clashDocumentJson = JSON.parse(clashDocumentBuffer).documents

    var clashInstanceBuffer = fs.readFileSync(clash_output_path + ms_id +
      '-' + ms_v_id + '-scope-version-clash-instance.2.0.0.json.gz')
    var clashInstanceJson = JSON.parse(clashInstanceBuffer).instances

    var clashBuffer = fs.readFileSync(clash_output_path + ms_id +
      '-' + ms_v_id + '-scope-version-clash.2.0.0.json.gz')
    var clashJson = JSON.parse(clashBuffer).clashes

    //var indexResultsJson = await utility.readLinesFiles(index_output_path+ indexResultFile)

    var msversionsBuffer = fs.readFileSync(ms_output_path + ms_id + '-' + ms_v_id + '-msversion.json')
    var msversionsJson = JSON.parse(msversionsBuffer)

    //find  model index of first model in pair

    var modelIndex_Pair = {}
    var urn1, urn2, modelIndex1, modelIndex2
    var filter = msversionsJson.documentVersions.filter(
      function (data) { return data.displayName == modelsNamePair[0] && data.documentStatus == 'Succeeded' }
    );
    if (filter && filter.length > 0)
      urn1 = filter[0].versionUrn
    filter = msversionsJson.documentVersions.filter(
      function (data) { return data.displayName == modelsNamePair[1] && data.documentStatus == 'Succeeded' }
    );
    if (filter && filter.length > 0)
      urn2 = filter[0].versionUrn

    filter = clashDocumentJson.filter(
      function (data) { return data.urn == urn1 }
    );
    if (filter && filter.length > 0)
      modelIndex1 = filter[0].id

    modelIndex_Pair[modelIndex1] = modelsNamePair[0]

    filter = clashDocumentJson.filter(
      function (data) { return data.urn == urn2 }
    );
    if (filter && filter.length > 0)
      modelIndex2 = filter[0].id

    modelIndex_Pair[modelIndex2] = modelsNamePair[1]

    var finalReport = []

    indexResultsJson.forEach(function (eachItem) {
      let name = eachItem.name
      let type = eachItem.typ
      let fam = eachItem.fam
      let cat = eachItem.cat
      let vid = eachItem.id
      let mid = eachItem.file


      let docname = modelIndex_Pair[mid]
      let clash = ''
      let clashcount = 0

      var filter = null
      if (mid == modelIndex1) {
        filter = clashInstanceJson.filter(
          function (data) { return data.lvid == eachItem.id && data.rdid == modelIndex2 }
        );
      }

      //find all 
      if (filter && filter.length > 0) {
        var clashIds = ''
        for (let x in filter)
          clashIds += filter[x].cid + ';'

        clashcount = filter.length
        var thisRecord = {
          name: name,
          docname: docname,
          clash: clashIds,
          clashcount: clashcount,
          type: type == null || type == '' ? 'null' : type,
          fam: fam == null || fam == '' ? 'null' : fam,
          cat: cat == null || cat == '' ? 'null' : cat,
          vid: vid,
          mid: mid
        }
        finalReport.push(thisRecord);
      }

    })
    resolve(finalReport)
  })
}


async function modelPairClash1(modelsNamePair, ms_id, ms_v_id, indexResultsJson) {

  return new Promise((resolve, reject) => {


    var clashDocumentBuffer = fs.readFileSync(clash_output_path + ms_id +
      '-' + ms_v_id + '-scope-version-document.2.0.0.json.gz')
    var clashDocumentJson = JSON.parse(clashDocumentBuffer).documents

    var clashInstanceBuffer = fs.readFileSync(clash_output_path + ms_id +
      '-' + ms_v_id + '-scope-version-clash-instance.2.0.0.json.gz')
    var clashInstanceJson = JSON.parse(clashInstanceBuffer).instances

    var clashBuffer = fs.readFileSync(clash_output_path + ms_id +
      '-' + ms_v_id + '-scope-version-clash.2.0.0.json.gz')
    var clashJson = JSON.parse(clashBuffer).clashes

    //var indexResultsJson = await utility.readLinesFiles(index_output_path+ indexResultFile)

    var msversionsBuffer = fs.readFileSync(ms_output_path + ms_id + '-' + ms_v_id + '-msversion.json')
    var msversionsJson = JSON.parse(msversionsBuffer)

    //find  model index of first model in pair

    var modelIndex_Pair = {}
    var urn1, urn2, modelIndex1, modelIndex2
    var filter = msversionsJson.documentVersions.filter(
      function (data) { return data.displayName == modelsNamePair[0] && data.documentStatus == 'Succeeded' }
    );
    if (filter && filter.length > 0)
      urn1 = filter[0].versionUrn
    filter = msversionsJson.documentVersions.filter(
      function (data) { return data.displayName == modelsNamePair[1] && data.documentStatus == 'Succeeded' }
    );
    if (filter && filter.length > 0)
      urn2 = filter[0].versionUrn

    filter = clashDocumentJson.filter(
      function (data) { return data.urn == urn1 }
    );
    if (filter && filter.length > 0)
      modelIndex1 = filter[0].id

    modelIndex_Pair[modelIndex1] = modelsNamePair[0]

    filter = clashDocumentJson.filter(
      function (data) { return data.urn == urn2 }
    );
    if (filter && filter.length > 0)
      modelIndex2 = filter[0].id

    modelIndex_Pair[modelIndex2] = modelsNamePair[1]

    var finalLeftReport = []
    var finalRightReport = []

    var dic = {}

    clashInstanceJson.forEach(function (eachItem) {

      var clashIds = ''
      var clashcount = 0 
      let lvid = eachItem.lvid
      let ldid = eachItem.ldid
      let rdid = eachItem.rdid
      let rvid = eachItem.rvid

      //de-duplicated 
      var leftkey = ldid +'-' +lvid 
      var rightkey = rdid +'-' +rvid 
      if( ldid == modelIndex1 && rdid == modelIndex2){
           
        if(!(leftkey in dic)){
          dic[leftkey]=0 
           //find out all clashes with this lvid
           filter = clashInstanceJson.filter(
            function (data) { return data.lvid == lvid && data.ldid == ldid &&  data.rdid == rdid}
          );

          //get out clashes
          if (filter && filter.length > 0) {
            for (let x in filter)
              clashIds += filter[x].cid + ';' 
            clashcount = filter.length
          } 

          //find left object
          filter = indexResultsJson.filter(function (data) { return data.id == lvid && data.file == ldid }); 
          var thisRecord = oneRecord(filter,modelIndex_Pair[modelIndex1],clashIds,clashcount)
          if(thisRecord)
            finalLeftReport.push(thisRecord); 
        }
        
         //find right object
         if(!(rightkey in dic)){
          dic[rightkey]=0 
          filter = clashInstanceJson.filter(
            function (data) { return data.rvid == rvid && data.ldid == ldid &&  data.rdid == rdid}
          );

          //get out clashes
          if (filter && filter.length > 0) {
            for (let x in filter)
              clashIds += filter[x].cid + ';' 
            clashcount = filter.length
          } 
          filter = indexResultsJson.filter(function (data) { return data.id == rvid && data.file == rdid }); 
          thisRecord = oneRecord(filter,modelIndex_Pair[modelIndex2],clashIds,clashcount)
          if(thisRecord)
            finalRightReport.push(thisRecord);
         }
      }      
    })
    resolve(finalLeftReport.concat(finalRightReport))
  })
}

function oneRecord(filter,docname,clashIds=0,clashcount=0){
  if (filter && filter.length > 0 ) {
    let name = filter[0].name
    let type = filter[0].type
    let fam = filter[0].family
    let cat = filter[0].category
    let vid = filter[0].id
    let mid = filter[0].file

    var thisRecord = {
      name: name,
      docname:docname ,
      clash: clashIds,
      clashcount: clashcount,
      type: type == null || type == '' ? 'null' : type,
      fam: fam == null || fam == '' ? 'null' : fam,
      cat: cat == null || cat == '' ? 'null' : cat,
      vid: vid,
      mid: mid
    }
    return thisRecord
  }else
    return null
}

function produceBreakdownView(ms_id, ms_v_id) {

  var clashInstanceBuffer = fs.readFileSync(clash_output_path + ms_id +
    '-' + ms_v_id + '-scope-version-clash-instance.2.0.0.json.gz')
  var _clashInsJsonObj = JSON.parse(clashInstanceBuffer).instances
  var _breakDic = {}
  for (var index in _clashInsJsonObj) {
    var eachItem = _clashInsJsonObj[index];

    var Ldid = eachItem.ldid - 1
    var Rdid = eachItem.rdid - 1
    var Lvid = eachItem.lvid
    var Rvid = eachItem.rvid

    if (Ldid in _breakDic) {
      if (Lvid in _breakDic[Ldid]) {
        if (Rdid in _breakDic[Ldid][Lvid]) {
          _breakDic[Ldid][Lvid][Rdid].push(Rvid)
        } else {
          _breakDic[Ldid][Lvid][Rdid] = []
          _breakDic[Ldid][Lvid][Rdid].push(Rvid)
        }

      } else {
        _breakDic[Ldid][Lvid] = {}
        _breakDic[Ldid][Lvid][Rdid] = []
        _breakDic[Ldid][Lvid][Rdid].push(Rvid)
      }
    } else {
      _breakDic[Ldid] = {};
      _breakDic[Ldid][Lvid] = {}
      _breakDic[Ldid][Lvid][Rdid] = []
      _breakDic[Ldid][Lvid][Rdid].push(Rvid)
    }

    if (Rdid in _breakDic) {
      if (Rvid in _breakDic[Rdid]) {
        if (Ldid in _breakDic[Rdid][Rvid]) {
          _breakDic[Rdid][Rvid][Ldid].push(Lvid)
        } else {
          _breakDic[Rdid][Rvid][Ldid] = []
          _breakDic[Rdid][Rvid][Ldid].push(Lvid)
        }

      } else {
        _breakDic[Rdid][Rvid] = {}
        _breakDic[Rdid][Rvid][Ldid] = []
        _breakDic[Rdid][Rvid][Ldid].push(Lvid)
      }
    } else {
      _breakDic[Rdid] = {};
      _breakDic[Rdid][Rvid] = {}
      _breakDic[Rdid][Rvid][Ldid] = []
      _breakDic[Rdid][Rvid][Ldid].push(Lvid)
    }
  }
  return _breakDic

}

function produceMatrixView(ms_id, ms_v_id) {

  var clashInstanceBuffer = fs.readFileSync(clash_output_path + ms_id +
    '-' + ms_v_id + '-scope-version-clash-instance.2.0.0.json.gz')
  var _clashInsJsonObj = JSON.parse(clashInstanceBuffer).instances


  var dic = {}

  for (var index in _clashInsJsonObj) {
    var eachItem = _clashInsJsonObj[index];

    var did_pair = (eachItem.ldid - 1) + '-' + (eachItem.rdid - 1)

    if (did_pair in dic) {
      if (eachItem.lvid in dic[did_pair]['left']) {
        dic[did_pair]['left'][eachItem.lvid]++
      }
      else {
        dic[did_pair]['left'][eachItem.lvid] = 1
      }
      if (eachItem.rvid in dic[did_pair]['right']) {
        dic[did_pair]['right'][eachItem.rvid]++
      }
      else {
        dic[did_pair]['right'][eachItem.rvid] = 1
      }
    } else {
      dic[did_pair] = {};
      dic[did_pair]['left'] = {}
      dic[did_pair]['left'][eachItem.lvid] = 1

      dic[did_pair]['right'] = {}
      dic[did_pair]['right'][eachItem.rvid] = 1

    }
  }
  return  dic
}


module.exports = {
  modelPairClash: modelPairClash,
  modelPairClash1: modelPairClash1,
  produceMatrixView: produceMatrixView,
  produceBreakdownView: produceBreakdownView
}