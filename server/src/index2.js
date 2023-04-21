const express = require('express');
const mysql = require('mysql');

const app = express();
const bodyParser = require('body-parser'); // helps to parse the request and create the req.body object
const cors = require('cors'); // Express middleware to enable CORS with various options
const corsURL = { origin: 'http://localhost:3001' };
app.use(cors(corsURL));
app.use(bodyParser.json()); // parsing request of content-type - application/json
app.use(bodyParser.urlencoded({ extended: true }));    // parsing request of content-type - application/x-www-form-urlencoded
const port = 5000;


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Lindani123',
  database: 'Car_Insurance_registration'
});

connection.connect();
console.log('Lindai');

app.post('/api/register', (req, res) => {
    const { name, email, phone, address, city, carMake, carModel, VIN, coverageOptions, paymentInfo } = req.body;
  
    const sql = 'INSERT INTO registrations (Drivers_Name, Email, Phone, Address, City, Car_Make, Car_Model, Vin_Number, coverage_options, Payment_information) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [name, email, phone, address, city, carMake, carModel, VIN, coverageOptions, paymentInfo];
  
    connection.query(sql, values, (error, results, fields) => {
      if (error) throw error;
      res.json({ success: true });
    });
  });
  


// app.listen(port, () => {
//   console.log(`Server started on port ${port}`);
// });
