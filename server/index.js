const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const database = mysql.createConnection({
    host: 'localhost',
    user: 'elnurdev',
    password: 'elnurdev',
    database: 'login_register_sys'
});

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const query = 'SELECT username, pass FROM users WHERE username = ? AND pass = ?';
    database.query(query, [username, password], (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

app.post('/register', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const query = 'INSERT INTO users(username, pass) VALUES (?, ?)';
    database.query(query, [username, password], (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

app.listen(3001, () => {
    console.log('Server running on port 3001!');
});