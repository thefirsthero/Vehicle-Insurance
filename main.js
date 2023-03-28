//import the express
const express = require('express');




//create express app
const expressapp = express();


//used for reading json data/parsing the json data
expressapp.use(express.json());
//url reading
expressapp.use(express.urlencoded({extended : true}));

//import routes 
require('./app/routes.js')(expressapp);



//define a simple route to check if app is working or not
expressapp.get('/',(req,res) =>{
    res.json({"message" : "Welcome to express crud app using mysql"});
});

//listen for requests /start the server
expressapp.listen(4300,() =>{
    console.log("server listening the port no 4300");
});


