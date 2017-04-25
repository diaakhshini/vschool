var express = require("express");
var port = process.env.Port || 8080;
var app = express();
var mongoose = require("mongoose");
var ejs = require("ejs");
var path = require("path");

//setup server to handle html
app.use(express.static(path.join(__dirname + "\\..\\public")));
app.set("views", __dirname + "\\..\\public\\views");

app.engine("html", ejs.renderFile);
app.set("view engine", "ejs");


//import routes
var apiRauter = require("./api.js");
var fileRouter = require("./files.js");

mongoose.connect("mongodb://localhost/menus");

app.use(fileRouter);
app.use(apiRauter);
app.listen(port, function () {
    console.log("the port has started");
});