var express = require("express");
var app = express();
app.get('/', function (req, res) {
    res.send("Hello bilal");
});
app.listen(3000, function () {
    console.log("App is listening on port 3000!");
});