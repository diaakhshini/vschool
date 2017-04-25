var express = require("express");

//get port
var port = process.env.Port || 8080;

var apiRoute = require("./routes/api.js");
var userRoute = require("./routes/signIn.js");
var config = require("./config");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var expressJwt = require("express-jwt");

mongoose.connect(config.database);

//setup server
var app = express();


//setup server to handle json
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use("/menu", expressJwt({
    secret: config.secret
}));
//import Routes

app.use("/menu", apiRoute);
app.use("/auth", userRoute);


app.listen(port, function () {
    console.log("Server has started on port " + port);
})