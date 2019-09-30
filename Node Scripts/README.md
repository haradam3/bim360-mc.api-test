# bim360-mc.api-test

Steps:
1. Input the params below in in [config.js](./config.js). 
-  Forge 3LO token. This can be achieved by Postman script >> *oAuth*
-  Container id of model coordination. This equal to project id 
-  One modelset id to inspect. The id can be achieved by Postman script >> *Get Model*.
-  Input modelsNamePair with two models name of the modelset. This can be acehieved by Postman script >>*GET One Modelset One Version*. Note: get those which documentStatus = Succeeded
-  Input your Cosmos credensial in [config.js](./config.js)

2. Run the script. Check the response of each call. Check the downloaded files in [Output](./Output). 
3. Ensure the analyzed data items are posted to Cosmos database. 
4. Check the CSV file of analyzed data 