const express = require('express');
const app = express();
const port = 3033;
const bodyParser = require('body-parser'); // helps to parse the request and create the req.body object

const cors = require('cors'); // Express middleware to enable CORS with various options

const corsURL = { origin: 'http://localhost:3000' };
app.use(cors(corsURL));

app.use(bodyParser.json()); // parsing request of content-type - application/json

app.use(bodyParser.urlencoded({ extended: true }));    // parsing request of content-type - application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.json({ message: 'Node server is running' });
}); // check if the server is running

require("./src/routes/user.routes.js")(app); // imported routes for different requests

app.listen(port, () => {
    console.log(`Node server running at http://localhost:${port}`)
});  // starts listening for requests