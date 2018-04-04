//Initiallising node modules
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const executeQuery = require('./executeQuery')
// Body Parser Middleware
app.use(bodyParser.json());

//CORS Middleware
// app.use(function (req, res, next) {
//     //Enabling CORS 
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
//     next();
// });

//Setting up server
var server = app.listen(process.env.PORT || 3000, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});

//Initiallising connection string
// var dbConfig = {
//     user: "",
//     password: "",
//     server: "",
//     database: ""
// };

//Function to connect to database and execute query
// var executeQuery = function (res, query) {
//     console.log('Entrado en la funcion executedQuery')
//     console.log(`Esto tiene res ${res} y esto tiene query ${query}`)
//     sql.connect(dbConfig, function (err) {
        
//         if (err) {
//             console.log("Error while connecting database :- " + err);
//             return err;
            
//         }      
//         else {
//             console.log(`Se conecto exitosamente a la BD ${err}`)
//             // create Request object
//             var request = new sql.Request();
//             // query to the database
//             request.query(query, function (err, ressql) { 
//                 //console.log(`Ejecuta la query ${err} ${res}`)
//                 if (err) {
//                     console.log("Error while querying database :- " + err);
//                     return err;
//                     //console.log(err)
//                 }
//                 else {
//                     res.send(ressql);
//                     //console.log(ressql)
//                 }
//             });
//         }
//     });
// }

//GET API
app.get("/api/UsersCarga", function (req, res) {
    var query = "select * from [Relacion_User_Carga]";
    executeQuery(res, query);
    //console.log(rest)
    //res.send(rest)
});

//POST API
app.post("/api/tblusua", function (req, res) {
    var query = "INSERT INTO [tblusua] (Name,Email,Password) VALUES (req.body.Name,req.body.Email,req.body.Password)";
    executeQuery(res, query);
});

//PUT API
app.put("/api/user/:id", function (req, res) {
    var query = "UPDATE [user] SET Name= " + req.body.Name + " , Email=  " + req.body.Email + "  WHERE Id= " + req.params.id;
    executeQuery(res, query);
});

// // DELETE API
//  app.delete("/api/user /:id", function(req , res){
//                 var query = "DELETE FROM [user] WHERE Id=" + req.params.id;
//                 executeQuery (res, query);
// });