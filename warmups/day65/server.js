var express = require("express");
var port = process.env.Port || 8080;
var app = express();
var apiRauter = require("./api.js");
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/menus");
app.use(apiRauter);
app.listen(port, function () {
    console.log("the port has started");
});