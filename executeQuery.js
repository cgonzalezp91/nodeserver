const sql = require("mssql");
const dbConfig = require('./config/db')
var executeQuery = function (res, query) {
    //console.log('Entrado en la funcion executedQuery')
   //console.log(`Esto tiene res ${res} y esto tiene query ${query}`)
    sql.connect(dbConfig, function (err) {
        
        if (err) {
            console.log("Error while connecting database :- " + err);
            return err;
            
        }      
        else {
            //console.log(`Se conecto exitosamente a la BD ${err}`)
            // create Request object
            var request = new sql.Request();
            // query to the database
            request.query(query, function (err, ressql) { 
                //console.log(`Ejecuta la query ${err} ${res}`)
                if (err) {
                    console.log("Error while querying database :- " + err);
                    return err;
                    //console.log(err)
                }
                else {
                    res.send(ressql);
                    //console.log(ressql)
                }
            });
        }
    });
}

module.exports = executeQuery