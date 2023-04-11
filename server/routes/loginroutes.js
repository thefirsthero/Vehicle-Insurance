const mysql = require("mysql");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const connection = mysql.createPool({
  host: "eu-cdbr-west-03.cleardb.net",
  user: "b5f65d809c15ac",
  password: "f47291eb",
  database: "heroku_a2a95f971318ee7",
});

exports.register = async function (req, res) {
  const password = req.body.password;
  const encryptedPassword = await bcrypt.hash(password, saltRounds);
  const user = {
    email: req.body.email,
    password: encryptedPassword,
    login: req.body.login,
    name: req.body.name,
    birth_date: req.body.birthdate,
    country: req.body.country,
    timestamp: Number(req.body.timestamp),
  };

  connection.query(
    'SELECT (SELECT email FROM logged_users WHERE email = "' +
      req.body.email +
      '") as email, (SELECT login FROM logged_users WHERE login = "' +
      req.body.login +
      '") as login',
    function (err, result) {
      if (err) throw err;
      if (result[0].email === null && result[0].login === null) {
        connection.query(
          "INSERT INTO logged_users SET ?",
          user,
          function (error, results, fields) {
            if (error) {
              res.send({
                code: 400,
                failed: "error ocurred",
                error,
              });
            } else {
              res.send({
                code: 200,
                success: "user registered sucessfully",
                logInInfo: {
                  ...user,
                },
              });
            }
          }
        );
      } else {
        res.send({
          code: 405,
          message: {
            ...result,
          },
        });
      }
    }
  );
};

exports.login = async function (req, res) {
  const emailOrLogin = req.body.emailOrLogin;
  const password = req.body.password;
  connection.query(
    '(SELECT * FROM logged_users WHERE email = "' +
      emailOrLogin +
      '") UNION (SELECT * FROM logged_users WHERE login = "' +
      emailOrLogin +
      '")',
    async function (error, results, fields) {
      if (error) {
        res.send({
          code: 400,
          failed: "error ocurred",
        });
      } else {
        if (results.length > 0) {
          const comparison = await bcrypt.compare(
            password,
            results[0].password
          );
          if (comparison) {
            res.send({
              code: 200,
              success: "login sucessfull",
              userInfo: {
                ...results,
              },
            });
          } else {
            res.send({
              code: 204,
              success: "Email and password does not match",
            });
          }
        } else {
          res.send({
            code: 206,
            success: "Email does not exits",
          });
        }
      }
    }
  );
};

exports.getCountryNames = async (req, res) => {
  connection.query(
    "SELECT nicename from countries",
    async function (error, results, fields) {
      if (error) throw error;
      if (results.length > 0) res.send(JSON.stringify(results));
    }
  );
};
