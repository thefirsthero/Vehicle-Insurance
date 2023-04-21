module.exports = app => {
    const users = require("../controllers/user.controller.js");
    const policyUsers = require("../controllers/policyUser.controller.js");
    const verifyToken = require("../middleware/authJwt");
    const insuranceController = require('../controllers/insurance.controller.js');

    app.post("/signup", users.create); // Create a user

    app.post("/signin", users.findOne); // Find a user

    //pull car data
    app.get('/userdashboard',insuranceController.selectVehicles);

    app.post('/api/register', policyUsers.createPolicy);

    // app.get("/getAllUsers", verifyToken, users.findAll); // Find all users

};
