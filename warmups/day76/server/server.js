var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var jwt = require("jsonwebtoken");
var expressJwt = require("express-jwt");
var ejs = require("ejs");
var path = require("path");

//import config
var config = require("./config");

//get port
var port = process.env.Port || 8080;

//setup connection
mongoose.connect("mongodb://localhost/" + config.database);

//setup server
var app = express();


//setup server to handle json
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


// setup to static files
app.use(express.static(path.join(__dirname + "/../public")));
app.set("views", __dirname + "/../public/views");

// setup engine
app.engine("html", ejs.renderFile);
app.set("views engine", "ejs");

// setup Routes
var apiRouter = require("./routes/api.js");
var authRouter = require("./routes/auth.js");
var fileRouter = require("./routes/file.js");

//check json token
app.use("/api", apiRouter);
app.use("/auth", userRouter);
app.use(fileRouter);


app.listen(port, function () {
    console.log("Server has started on port " + port);
});