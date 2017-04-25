var express = require("express");
var apiRouter = express.Router();
var uuid = require("uuid");
var menu = require("./Object.js");


apiRouter.get("/", function (req, res) {
    if (Object.keys(req.query).length === 0) {
        res.status(200).send({
            "message": "this is data",
            data: menu
        });
    } else {
        for (key in req.query) {
            console.log(req.query[key])
            for (i = 0; i < menu.length; i++) {
                console.log(menu[i][key])
                if (menu[i][key] === req.query[key])
                    menu.push(menu[key])
            }
        }

    }
    res.status(200).send({
        "meseeage": "thanks for your efforts",
        data: statement
    });
});
module.exports = apiRouter;