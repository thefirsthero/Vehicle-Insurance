module.exports = app => {
    const users = require("../controllers/user.controller.js");
    const policyUsers = require("../controllers/policyUser.controller.js");
    const verifyToken = require("../middleware/authJwt")

    app.post("/signup", users.create); // Create a user

    app.post("/signin", users.findOne); // Find a user

    app.post('/api/register', policyUsers.createPolicy);

    // app.get("/getAllUsers", verifyToken, users.findAll); // Find all users

};
