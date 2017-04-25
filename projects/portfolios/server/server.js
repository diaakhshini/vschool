var express = require("express");
var port = process.env.port || 8080;
var bodyParser = require("body-parser");
var app = express();
var mongoose = require("mongoose");
var ejs = require("ejs");
var path = require("path");
mongoose.connect("mongodb://localhost/Warehouse");

app.use(express.static(path.join(__dirname + "//..//public")));
app.set("views", __dirname + "//..//public//views");
app.engine("html", ejs.renderFile);
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
var apiRoute = require("./routres/api.js");

var fileRoute = require("./routres/file.js");
app.use("/product", apiRoute);

app.use(fileRoute);
app.listen(port, function () {
    console.log("listen the port")
});