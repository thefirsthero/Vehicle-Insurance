const jwt = require('jsonwebtoken');
const User = require("../models/user.model.js");
const mysql = require('mysql2');
const PolicyUser = require('../models/policyUser.model.js');

// Create and Save a new User
exports.createPolicy = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a PolicyUser
  const policyUser = new PolicyUser({
    Drivers_Name: req.body.name, // ... : [must match field name in form (request)]
    Email: req.body.email,
    Phone: req.body.phone,
    Address: req.body.address,
    City: req.body.city,
    Car_Make: req.body.carMake,
    Car_Model: req.body.carModel,
    Vin_Number: req.body.VIN,
    coverage_options: req.body.coverageOptions,
    Payment_information: req.body.paymentInfo,
  });

  // Save PolicyUser in the database
  PolicyUser.createPolicy(policyUser, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the user."
      });
    else {
      res.json(data)
    }
  });
};