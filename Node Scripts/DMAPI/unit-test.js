var fs = require('fs')  
var forgeapis = require('forge-apis')  

var config = require('../config')
var endpoints = require('./endpoints')

async function createStorage(projectid,filename,folderid) {
  let body = {
    data:{
      type:'objects',
      attributes:{
        name:filename
      },
      relationships:{
        target:{
          data:{
            type:'folders',
            id: folderid
          }
        }
      }
    }
  }
  const headers = endpoints.httpHeaders(config.thisToken)
  const result = await post(endpoints.createStorage(projectid), headers,JSON.stringify(body))
  return result;
}

async function uploadFile(file_full_path_name,stgid) { 

  const filecontent = fs.readFileSync('DM/'+file_full_path_name)
  let headers = endpoints.httpHeaders(config.thisToken)
  headers['Content-Length'] = filecontent.length 
  headers['Content-Type'] = 'application/octet-stream' 

  let params = stgid.split('/')
  let objid = params[params.length - 1]
  let firstSection = params[params.length - 2]

  params = firstSection.split(':')
  let bucket = params[params.length - 1]

  const result = await put(endpoints.uploadFile(bucket,objid), headers,filecontent)
  return result; 
 
}

async function createItem(projectid,displayName,itemType,versionType,folderid,objecturn) {
  let body = {
    
    data: {
      type: 'items',
      attributes: {
        displayName: displayName,
        extension: {
          type: itemType,
          version: '1.0'
        }
      },
      relationships: {
        tip: {
          data: {
            type: 'versions',
            id: '1'
          }
        },
        parent: {
          data: {
            type: 'folders',
            id: folderid
          }
        }
      }
    },
    included: [
      {
        type: 'versions',
        id: '1',
        attributes: {
          name: displayName,
          extension: {
            type: versionType,
            version: '1.0'
          }
        },
        relationships: {
          storage: {
            data: {
              type: 'objects',
              id: objecturn
            }
          }
        }
      }
    ]
  }
  const headers = endpoints.httpHeaders(config.thisToken)
  const result = await post(endpoints.createItem(projectid), headers,JSON.stringify(body))
  return result;
}
 

module.exports = {
    createStorage,
    uploadFile,
    createItem 
};
 



