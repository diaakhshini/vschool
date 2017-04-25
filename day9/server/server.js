var express = require("express");

var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var validate = require("./object.js");
//var route = require("./public/js/app.js");

var app = express();
var ejs = require("ejs");
var path = require("path");
var port = process.env.Port || 8080;
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + "\\..\\public")));
app.set("views", __dirname + "\\..\\public\\views");

//setup server to handle html
app.engine("html", ejs.renderFile);
app.set("view engine", "ejs");

var filesRouter = require("./files.js");
var apiRouter = require("./api.js");
app.use(filesRouter);
app.use(apiRouter);

mongoose.connect("mongodb://localhost/menu")

app.listen(port, function () {
    console.log("my port is" + port);
});