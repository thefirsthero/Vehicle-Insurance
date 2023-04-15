module.exports = app => {
    const users = require("../controllers/user.controller.js");
    const verifyToken = require("../middleware/authJwt")

    app.post("/signup", users.create); // Create a user

    app.post("/signin", users.findOne); // Find a user

    // app.get("/getAllUsers", verifyToken, users.findAll); // Find all users

};
