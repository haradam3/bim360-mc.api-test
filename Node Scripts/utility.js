
const fs = require("fs");
const fetch = require('node-fetch');
const rimraf = require('rimraf');
const readline = require('readline'); 


async function clearFolder(folder){
    return new Promise((resolve, reject) => {
        rimraf(folder+ '/*', function () { 
            console.log('clear output foler done'); 
            resolve();
        }); 
    }); 
}  

async function saveJsonObj(path,filename,obj){

    return new Promise((resolve, reject) => {
        const stringToWrite = JSON.stringify(obj, null, ' ')
        // Trim leading spaces:
        .replace(/^ +/gm, '')
        // Add a space after every key, before the `:`:
        .replace(/: "(?:[^"]+|\\")*",?$/gm, ' $&');

        fs.writeFile(path+filename, 
        stringToWrite, function(err) { 
            if(err) {
                reject(err);
            } 
            resolve(path+filename + ' saved!');
        });  
    }); 
}
 

async function downloadResources( 
    url,headers,
    path,filename) { 

        const options = { method: 'GET', headers: headers }; 
        const res = await fetch(url,options); 
        const fileStream = fs.createWriteStream(path+filename); 

        return new Promise((resolve, reject) => {
            res.body.pipe(fileStream);
                res.body.on("error", (err) => {
                reject(err);
            });
            fileStream.on("finish", function(res) {
            resolve(filename);
            }); 
        }); 
}  


async function readLinesFile(csvFilePath){

    return new Promise((resolve, reject) => {

        var returnJson =[]
        let rl = readline.createInterface({
            input: fs.createReadStream(csvFilePath)
        });
        
        let line_no = 0; 
        // event is emitted after each line
        rl.on('line', function(line) {
            line_no++; 
            returnJson.push(JSON.parse(line.trim()))
        }); 
        // end
        rl.on('close', function(line) {
            console.log('Total lines : ' + line_no);
            resolve(returnJson)
        });
    }); 
}

module.exports = { 
    clearFolder:clearFolder,
    saveJsonObj:saveJsonObj,
    downloadResources:downloadResources,
    readLinesFile:readLinesFile 
}