var config = require('../config'); 


module.exports = { 

  isStag:false,
  version:'v1',
  emea:'',
  ForgeBaseUrl:function(){
    if(config.isStg)
      return 'https://developer-stg.api.autodesk.com'
    else
      return 'https://developer.api.autodesk.com' 
  }, 
  basedUrl: function(){
      return this.ForgeBaseUrl()
  }, 
  httpHeaders: function (access_token) {
    return {
      Authorization: 'Bearer ' + access_token,
      'Content-Type': 'application/vnd.api+json'
    }
  }, 
  //endpoints of achieving data
  getHubs: function () {
    return this.basedUrl() +  '/project/'+this.version + '/hubs'
  }, 
  getHub: function (hubid) {
    return this.basedUrl() +  '/project/'+ this.version + '/hubs/' + hubid
  }, 
  getProjects: function (hubid) {
    return this.basedUrl() +  '/project/'+ this.version +'/hubs/' + hubid + '/projects'
  },
  getProject: function (hubid,projectid) {
    return this.basedUrl() +  '/project/'+ this.version +'/hubs/' + hubid + '/projects/'+projectid
  }, 
  getFolderContents: function (projectid,folderid) {
    return this.basedUrl() +  '/data/'+ this.version +'/projects/' + projectid + '/folders/'+folderid + '/contents'
  },
  getTopFolders: function (hubid,projectid) {
    return this.basedUrl() +  '/project/'+ this.version +'/hubs/' + hubid + '/projects/'+projectid + '/topFolders'
  },
  createStorage: function (projectid) {
    return this.basedUrl() +  '/data/'+ this.version +'/projects/' + projectid + '/storage'
  },
  uploadFile: function (bucket,objid) {
    //return this.basedUrl() +  '/oss/'+ this.version + '/buckets/'+bucket+'/objects/' + objid
    return this.basedUrl() +  '/oss/buckets/'+bucket+'/objects/' + objid
  },
  createItem: function (projectid,stgid) {
    return this.basedUrl() +  '/data/'+ this.version + '/projects/' + projectid + '/items'
  } 
};