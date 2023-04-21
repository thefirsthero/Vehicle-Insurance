const sql = require("./db.js");

// constructor
const PolicyUser = function (policyUser) {
  this.Drivers_Name = policyUser.Drivers_Name; //this.[must match field name in db] = ...
  this.Email = policyUser.Email;
  this.Phone = policyUser.Phone;
  this.Address = policyUser.Address;
  this.City = policyUser.City;
  this.Car_Make = policyUser.Car_Make;
  this.Car_Model = policyUser.Car_Model;
  this.Vin_Number = policyUser.Vin_Number;
  this.coverage_options = policyUser.coverage_options;
  this.Payment_information = policyUser.Payment_information;
};

PolicyUser.createPolicy = (newPolicy, result) => {      
    sql.query("INSERT INTO registrations SET ?", newPolicy, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
          
            console.log("created user: ", { id: res.insertId, ...newPolicy });
            result(null, { id: res.insertId, ...newPolicy });
        });
};

module.exports = PolicyUser;