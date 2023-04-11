const express = require("express");
const login = require("./routes/loginroutes");
const bodyParser = require("body-parser");
const cors = require("cors");

const path = require("path");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
const router = express.Router();

router.post("/register", login.register);
router.post("/login", login.login);
router.get("/countries", login.getCountryNames);
app.use("/api", router);

app.get("/", async function (req, res) {
  res.send("welcome");
});
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname + "client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build", "index.html"));
  });
}

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`listening at ` + port));
