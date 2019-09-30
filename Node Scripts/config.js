

'use strict';

// Autodesk Forge configuration
module.exports = { 
  
  
  token:'eyJhbGciOiJIUzI1NiIsImtpZCI6Imp3dF9zeW1tZXRyaWNfa2V5In0.eyJ1c2VyaWQiOiIyMDA5MDIyNjA1MzI2MjEiLCJleHAiOjE1Njk4MDI4NDksInNjb3BlIjpbImRhdGE6cmVhZCIsImRhdGE6d3JpdGUiXSwiY2xpZW50X2lkIjoiTjlxWEswOFBZdHRpY1dUR3NxaEJ1SjNnRTJKSTIzNEoiLCJncmFudF9pZCI6IkN1SWdyajVZSnZXS0c3Q0M4RDRSZjl2V0JmdlhmU2xXIiwiYXVkIjoiaHR0cHM6Ly9hdXRvZGVzay5jb20vYXVkL2p3dGV4cDYwIiwianRpIjoiTmNJWUJHa281cXNaTm5RT3ptakRXcUZBcWxXS0ZsU21UTHBSanVncW5IS2tjY2RrOVo1NWJXNG9neVRqTnBwRiJ9.78ZfDK36Mfo3OQT7TknLbWclsMv1MvG7nha9bJWOByA',
  mc:{
    //hard-code MC container ID (= project id) for simple test
    mc_container_id:'<container id of Model Coordination>',
    
    //hard-code of specific model set id to demo dump
    ms_id:'<model set id>',
    
    //model pair to analyze
    //cooresponding to UI with the demo sets, we analyze 
    modelsNamePair:['{3D}_Audubon_Architecture.rvt','{3D}_Audubon_Structure.rvt'] 
  },

  //Cosmos DB
  cosmos:{
    // endpoint
    endpoint:'<endpoint of cosmos database>',
    //key
    key:'<key of cosmos database>'
     
  }



};