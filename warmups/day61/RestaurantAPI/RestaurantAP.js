var express = require("express");
var uuid = require("uuid");
var app = express();
var port = process.env.port || 8080;
var validate = require("./validate");
var menu = require("./Object.js");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.get("/menu/", function (req, res) {
    if (Object.keys(req.query).length === 0) {
        res.status(200).send({
            "message": "this is data",
  data: menu
        });
    } else {
        var statement = [];
        for (key in req.query) {
            console.log(req.query[key])
            for (i = 0; i < menu.length; i++) {
                console.log(menu[i][key])
                if (menu[i][key] === req.query[key])
                    statement.push(menu[key])
            }
        }

    }
    res.status(200).send({
        "meseeage": "thanks for your efforts",
        data: statement
    });
});
app.listen(port, function () {
    console.log('Server is running..' + port);
});