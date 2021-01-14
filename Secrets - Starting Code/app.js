require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
var md5 = require('md5');

const app = express();
app.set("view engine", "ejs");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/UserDB", {
  useNewUrlParser: true,
});

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});


const User = mongoose.model("User", userSchema);

/////////////////////////////////////////////////////////////////// routes////////////////////////////////////

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", (req, res) => {
  const newUser = new User({
    email: req.body.username,
    password: md5(req.body.password),
  });
  newUser.save((err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.render("secrets");
    }
  });
});

app.post("/login", (req, res) => {
  const checkUserEmail = req.body.username;
  const checkUserpass =md5(req.body.password) ;

  User.findOne({ email: checkUserEmail }, (err, founded) => {
    if (err) {
      res.send(err);
    } else {
      if (founded) {
        if (founded.password === checkUserpass) {
          res.render("secrets");
        
        }
      }
    }
  });
});

/////////////////////////////////////////////////////////////server//////////////////////////////////////////

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
