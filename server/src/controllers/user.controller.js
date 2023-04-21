const jwt = require('jsonwebtoken');
const User = require("../models/user.model.js");
const mysql = require('mysql2');

// Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a User
  const user = new User({
    id: req.body.user_id_number, // ... : [must match field name in form (request)]
    name: req.body.user_name,
    surname: req.body.user_surname,
    email: req.body.user_email,
    password: req.body.user_password,
  });

  // Save User in the database
  User.create(user, (err, data) => {
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

exports.findOne = (req, res) => {
  const signInUser = {
    email: req.body.user_email, // must match the field name in the form
    password: req.body.user_password,
  }
  User.findByEmail(signInUser, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `No user found with emailId ${signInUser.email}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving user information with emailId " + signInUser.email
        });
      }
    } else {
      
      User.isAdmin(signInUser, (err,data) => {
        if(err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `No user found with emailId ${signInUser.email}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving user information with emailId " + signInUser.email
            });
          }
        } else{
          // can log in
          // admin vs user logic
          // console.log(data.is_admin) // implement it here
          // const { id, name, email } = data;
          const admin_id = data.is_admin
          const token = jwt.sign({ data }, 'secretkey');
          // res.json({ token, id, name, email })
          res.json({token, admin_id});
        }
      })
    };
  });
};

exports.findAll = (req, res) => {
  User.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "error while retrieving users information."
      });
    else res.send(data);
  });
};

exports.selectVehicles = (req,res) => {
  console.log(req.params.empid);
  connection.query("select * from users inner join vehicles on users.userId= vehicles.userId where users.userId = ?",1999,
  function(error,results,fields){
      if(error) throw error;
      return res.end(JSON.stringify(results));
  });
} ;