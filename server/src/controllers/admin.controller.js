const mysql = require('mysql')

const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'register_login_sys'
})

database.connect((error) => {
    if (error) throw error
    console.log('Connected to Database')
})

exports.getapplications = (req, res) => {
    database.query("select * from registrations",
        function (err, result, fields) {
            if (err) {
                return err
            }
            return res.send(JSON.stringify(result))
        })

}

exports.getpolicies = (req, res) => {
    database.query("select * from approvedpolicies",
        function (err, result, fields) {
            if (err) {
                return err
            }
            return res.send(JSON.stringify(result))
        })

}

exports.getusers = (req, res) => {
    database.query("select * from users",
        function (err, result, fields) {
            if (err) {
                return err
            }
            return res.send(JSON.stringify(result))
        })

}

exports.searchusers = (req, res) => {
    database.query("select * from users where user_name = ? or user_surname = ? or user_email = ? or user_id_number = ?",
        [req.params.s, req.params.s, req.params.s, req.params.s],
        function (err, result, fields) {
            if (err) {
                return err
            }
            return res.send(JSON.stringify(result))
        })

}

exports.searchpolicies = (req, res) => {
    database.query("select * from approvedpolicies where Drivers_Name = ? ",
        [req.params.s],
        function (err, result, fields) {
            if (err) {
                return err
            }
            return res.send(JSON.stringify(result))
        })

}

exports.searchapplications = (req, res) => {
    database.query("select * from registrations where Drivers_Name = ? ",
        [req.params.s],
        function (err, result, fields) {
            if (err) {
                return err
            }
            return res.send(JSON.stringify(result))
        })

}

exports.approvepolicy = (req, res) => {
    jsondata = req.body;

    a = jsondata['id'];
    b = jsondata['Drivers_Name'];
    c = jsondata['Email'];
    d = jsondata['Phone'];
    e = jsondata['Address'];
    f = jsondata['City'];
    g = jsondata['Car_Make'];
    h = jsondata['Car_Model'];
    i = jsondata['Vin_Number'];
    j = jsondata['coverage_options'];
    k = jsondata['Payment_information'];

    database.query("insert into approvedpolicies (id, Drivers_Name, Email, Phone, Address, City, Car_Make, Car_Model, Vin_Number, coverage_options, Payment_information) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ",
        [a, b, c, d, e, f, g, h, i, j, k],
        function (err, result, fields) {
            if (err) {
                return err
            }
            return res.send(JSON.stringify(result))
        })

}

exports.deletepolicy = (req, res) => {
    database.query("delete from registrations where id = ?",
        [req.params.i],
        function (error, result, fields) {
            if (error) throw error;
            return res.send(JSON.stringify(result))
        })
}