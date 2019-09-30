
//clients of MCAPI
const msclient = require("./MCAPI/Modelset");
const clashclient = require("./MCAPI/Clash");
const indexclient = require("./MCAPI/Index");
const createCsvWriter = require('csv-writer').createObjectCsvWriter; 

const config = require('./config');

//container of MC (=project id)
var mc_container_id = config.mc.mc_container_id
var ms_id = config.mc.ms_id

//3LO token
var token = config.token
//initialize the clients of MC API
msclient.ApiClient.instance.authentications["oauth2AuthCode"].accessToken = token 
clashclient.ApiClient.instance.authentications["oauth2AuthCode"].accessToken = token 
indexclient.ApiClient.instance.authentications["oauth2AuthCode"].accessToken = token 

async function getModelSets(mc_container_id) {
    return new Promise((resolve, reject) => {
        var containersApi = new msclient.ContainersApi() 
        containersApi.getModelSets(mc_container_id)
        .then(res=>{
            resolve(res)
        })
        .catch(ex =>{
            console.log(ex) 
            reject(ex)
        })  
    })  
} 

async function getModelSet(mc_container_id,ms_id) {
    return new Promise((resolve, reject) => {
        var modelsetsApi = new msclient.ModelSetsApi()

        modelsetsApi.getModelSet(mc_container_id,ms_id)
        .then(res=>{
            resolve(res)
        })
        .catch(ex =>{
            console.log(ex)
            reject(ex)
        })  
    })  
} 

async function getModelSetPermission(mc_container_id,ms_id) {
    return new Promise((resolve, reject) => {
        var modelsetsApi = new msclient.ModelSetsApi()

        modelsetsApi.getModelSetPermissions(mc_container_id,ms_id)
        .then(res=>{
            resolve(res)
        })
        .catch(ex =>{
            console.log(ex)
            reject(ex)
        })  
    })  
} 

async function getModelSetVersions(mc_container_id,ms_id) {
    return new Promise((resolve, reject) => {
        var msVersionApi = new msclient.ModelSetVersionsApi()

        msVersionApi.getModelSetVersions(mc_container_id,ms_id)
        .then(res=>{
            resolve(res)
        })
        .catch(ex =>{
            console.log(ex)
            reject(ex)
        })  
    })  
} 

async function getModelSetVersion(mc_container_id,ms_id,ms_v_id) {
    return new Promise((resolve, reject) => {
        var msVersionApi = new msclient.ModelSetVersionsApi()

        msVersionApi.getModelSetVersion(mc_container_id,ms_id,ms_v_id)
        .then(res=>{
            resolve(res)
        })
        .catch(ex =>{
            console.log(ex)
            reject(ex)
        })  
    })  
} 

async function getModelSetVersionIndex(mc_container_id,ms_id,ms_v_id) {
    return new Promise((resolve, reject) => {
        var msVersionApi = new msclient.ModelSetVersionsApi()

        msVersionApi.getModelSetVersion(mc_container_id,ms_id,ms_v_id)
        .then(res=>{
            resolve(res)
        })
        .catch(ex =>{
            console.log(ex)
            reject(ex)
        })  
    })  
} 

async function getClashTests(mc_container_id,ms_id) {
    return new Promise((resolve, reject) => {
        var testsApi = new clashclient.TestsApi()

        testsApi.getModelSetClashTests(mc_container_id,ms_id)
        .then(res=>{
            resolve(res)
        })
        .catch(ex =>{
            console.log(ex)
            reject(ex)
        })  
    })  
} 

async function getClashTest(mc_container_id,testid) {
    return new Promise((resolve, reject) => {
        var testsApi = new clashclient.TestsApi()

        testsApi.getClashTest(mc_container_id,testid)
        .then(res=>{
            resolve(res)
        })
        .catch(ex =>{
            console.log(ex)
            reject(ex)
        })  
    })  
} 

async function getClashTestResources(mc_container_id,testid) {
    return new Promise((resolve, reject) => {
        var testsApi = new clashclient.TestsApi()

        testsApi.getClashTestResources(mc_container_id,testid)
        .then(res=>{
            resolve(res)
        })
        .catch(ex =>{
            console.log(ex)
            reject(ex)
        })  
    })  
} 




async function queryModelSetVersionIndexManifest(mc_container_id,ms_id,m_v_id) {
    return new Promise((resolve, reject) => {
        var indexApi = new indexclient.IndexApi()

        indexApi.queryModelSetVersionIndexManifest(mc_container_id,ms_id,m_v_id)
        .then(res=>{
            resolve(res)
        })
        .catch(ex =>{
            console.log(ex)
            reject(ex)
        })  
    })  
} 

async function queryModelSetVersionIndexFields(mc_container_id,ms_id,m_v_id) {
    return new Promise((resolve, reject) => {
        var indexApi = new indexclient.IndexApi()

        indexApi.queryModelSetVersionIndexFields(mc_container_id,ms_id,m_v_id)
        .then(res=>{
            resolve(res)
        })
        .catch(ex =>{
            console.log(ex)
            reject(ex)
        })  
    })  
} 

async function QueryIndex(mc_container_id,ms_id,m_v_id,indexQuery) {
    return new Promise((resolve, reject) => {
        var indexApi = new indexclient.IndexApi()

        indexApi.queryModelSetVersionIndex(mc_container_id,ms_id,m_v_id,{indexQuery:{statement:indexQuery}})
        .then(res=>{
            resolve(res)
        })
        .catch(ex =>{
            console.log(ex)
            reject(ex)
        })  
    })  
} 

async function getJob(mc_container_id,ms_id,job_id) {
    return new Promise((resolve, reject) => {
        var indexApi = new indexclient.IndexApi()

        indexApi.getModelSetJob(mc_container_id,ms_id,job_id)
        .then(res=>{
            resolve(res)
        })
        .catch(ex =>{
            console.log(ex)
            reject(ex)
        })  
    })  
} 
 

module.exports = { 
    getModelSets:getModelSets,
    getModelSet:getModelSet,
    getModelSetPermission:getModelSetPermission,
    getModelSetVersions:getModelSetVersions,
    getModelSetVersion:getModelSetVersion,
    getModelSetVersionIndex:getModelSetVersionIndex,
    getClashTests:getClashTests,
    getClashTest:getClashTest,
    getClashTestResources:getClashTestResources, 
    queryModelSetVersionIndexManifest:queryModelSetVersionIndexManifest,
    queryModelSetVersionIndexFields:queryModelSetVersionIndexFields,
    QueryIndex:QueryIndex,
    getJob:getJob 
}