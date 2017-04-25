var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var ejs = require("ejs");
var path = require("path");

var jwt = require("jsonwebtoken");
var expressJwt = require("express-jwt");
var config = require("./config.js");

var authRouter = require("./routres/auth.js");

var port = process.env.port || 8080;

mongoose.connect("mongodb://localhost/"+config.database);
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var apiRouter = require("./routres/api.js");
app.use(express.static(path.join(__dirname + "\\..\\public")));
app.set("views", __dirname + "\\..\\public\\views");

//setup server to handle html
app.engine("html", ejs.renderFile);
app.set("view engine", "ejs");

var filesRouter = require("./routres/files.js");

app.use(filesRouter);

//app.use("/api", expressJwt({secret: config.secret}));
app.use("/api",apiRouter);
app.use("/auth", authRouter);
app.listen(port, function(){
    console.log("I am listening on port" + port)
});