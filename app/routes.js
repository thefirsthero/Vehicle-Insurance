module.exports = (expressapp) =>{
    const employeeController = require('../controllers/employee.controller.js');

    //create a new employee
    expressapp.post('/employees',employeeController.createEmployee);

    //select all employees
    expressapp.get('/getallemployees',employeeController.selectAllEmployees);

    //select an employee with id
    expressapp.get('/getemployee/:empid',employeeController.selectEmployee);


    //select an employee with name
    expressapp.get('/getemployeebyname',employeeController.selectEmployeeByName);

    //update an employee
    expressapp.put('/updateemployee/:empid',employeeController.updateEmployee);

    //delete an employee
    expressapp.delete('/deleteemployee/:empid',employeeController.deleteEmployee);

    //login of employee
    expressapp.get('/loginemployee',employeeController.checkEmployeeLogin);

}