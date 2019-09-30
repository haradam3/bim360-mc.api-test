const config = require('./config');

//initialize Cosmos client
const { CosmosClient } = require("@azure/cosmos"); 
const endpoint = config.cosmos.endpoint
const key = config.cosmos.key
const cosmosClient = new CosmosClient({ endpoint, key });  
  
async function createClient(databaseDefinition,collectionDefinition) { 

    
    const { database } = await cosmosClient.databases.createIfNotExists(databaseDefinition);
    console.log("created database");
   
    const { container } = await database.containers.createIfNotExists(collectionDefinition);
    console.log("created collection");  

    return container;
    
} 
 
module.exports = { 
    createClient:createClient 
}
