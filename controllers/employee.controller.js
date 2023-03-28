/* import mysql package which is predefined in nodejs to
integrate mysql database with express application */
const mysql = require('mysql2');

//connection configuration to connect with DB
const connection =  mysql.createConnection({
    host:'localhost',//this is server address or local machine where mysql is running
    user : 'root', //username for mysql
    password : 'root', //password for mysql
    database : 'expresscruddemo' //database created in mysql
});

//establish the database connection 
connection.connect((err) =>{
    if(err) throw err;
    console.log("You are now connected with mysql database.....")
});

//insert employee in the DB
exports.createEmployee = (req,res) =>{
    //validate request for mandatory fields
    if(!req.body.employeename){
        return res.status(400).send({
            message : "employee name cannot be null"
        });
    }

    var empData = req.body;
    console.log(empData);
    //connect with db and insert above empData in the DB
    connection.query("INSERT INTO employee SET ? ",empData,
    function(error,results,fields){
        if(error) throw error;
        return res.send({
            data : results,
            message : "New employee added successfully."
        });
    });

}; //end of create new employee

//retrive all employees
exports.selectAllEmployees = (req,res) =>{
    connection.query("select * from employee",
    function(error,results,fields){
        if(error) throw error;
        return res.end(JSON.stringify(results));
    });
}; //end of get all employees

//retrieve employee with an specific id
exports.selectEmployee = (req,res) => {
    console.log(req.params.empid);
    connection.query("select * from employee where employeeid = ?",
    [req.params.empid],
    function(error,results,fields){
        if(error) throw error;
        return res.end(JSON.stringify(results));
    });
} ;//end of get  employee

//retrieve employee with an specific name
exports.selectEmployeeByName = (req,res) => {
    //console.log(req.params.empname);
    connection.query("select * from employee where employeename = ?",
    req.body.employeename,
    function(error,results,fields){
        if(error) throw error;
        return res.end(JSON.stringify(results));
    });
} ;//end of get  employee by name

//update employee 
exports.updateEmployee = (req,res) =>{
    //validate request for mandatory fields
    if(!req.body.employeename){
        return res.status(400).send({
            message : "employee name cannot be null"
        });
    } 
    console.log(req.params.empid);
    console.log(req.body);
    connection.query("update employee set employeename= ?,employeesalary = ?,employeedept =? where employeeid= ?",
    [req.body.employeename,req.body.employeesalary,
        req.body.employeedept,req.params.empid],
    function(error,results,fields){
        if(error) throw error;
        return res.end(JSON.stringify(results));
    });
} //close of update employee

//delete a employee with the specific id in the request
exports.deleteEmployee =  (req,res) =>{
    console.log(req.params.empid);
    connection.query("delete from employee where employeeid = ?",
    [req.params.empid],
    function(error,results,fields){
        if(error) throw error;
        return res.end("Employee has been deleted");
    });
}

//check employee login using employeeid and employeepwd
//retrieve employee with an specific id and password
exports.checkEmployeeLogin = (req,res) => {
    //console.log(req.params.empname);
    connection.query("select * from employee where employeeid = ? and employeepwd = ?",
    [req.body.employeeid,req.body.employeepwd],
    function(error,results,fields){
        if(error) throw error;
        return res.end(JSON.stringify(results));
    });
} ;//end of get  employee by name