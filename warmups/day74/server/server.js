var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var port = process.env.port || 8080;
mongoose.connect("mongodb://localhost/schema");
var app = express();
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
var apiRouter = require("./api.js");
app.use("/api", apiRouter);
app.listen(port, function () {
    console.log("I am listeng on port" + port);
});