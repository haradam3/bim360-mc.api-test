var createCsvWriter = require('csv-writer').createObjectCsvWriter;

function buildCSVHeader(){ 
    var header = [
            {id: 'name', title: 'name'}, 
            {id: 'type', title: 'type'},  
            {id: 'clash', title: 'clash'},
            {id: 'clashcount', title: 'clash count'}, 
            {id: 'docname', title: 'doc name'}  ,
            {id: 'fam', title: 'fam'} , 
            {id: 'cat', title: 'cat'},
            {id: 'vid', title: 'vid'},
            {id: 'mid', title: 'mid'} 
        ]  
    return header;
}

function exportCSV(path,filename,body){

    const csvWriter = createCsvWriter({
        path: path+'/' + filename,
        header:  buildCSVHeader()
    }); 
     
    csvWriter.writeRecords(body)       
        .then(() => {
            console.log('...Done CSV');
    });
}

module.exports = {  
    exportCSV:exportCSV 
}

