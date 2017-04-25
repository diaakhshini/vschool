var express = require("express");

//get port
var port = process.env.Port || 8080;



var bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/menus");


//setup server
var app = express();


//setup server to handle json
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

//import Routes
var apiRoute = require("./routes/api.js");
var userRoute = require("./routes/signIn.js");
app.use(apiRoute);
app.use(userRoute);


app.listen(port, function () {
    console.log("Server has started on port " + port);
})