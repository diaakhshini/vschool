var express = require("express");
var Menu = require("../models/menu.js");
var apiRoute = express.Router();


apiRoute.get("/", function (req, res) {
    Menu.find({}, function (err, data) {
        if (err) {
            res.status(500).send({
                message: "Error in db",
                err: err
            });



        } else {
            res.status(200).send({
                message: "Here is the data",
                data: data
            });

        }
    });
});



apiRoute.post("/", function (req, res) {
    var newItem = new Menu(req.body);
    newItem.save(function (err, data) {
        if (err) {
            res.status(500).send({
                message: "Error in db",
                err: err
            });
        } else {
            res.status(200).send({
                message: "load is the data",
                data: data

            });
        }
    });
});



apiRoute.delete("/:id", function (req, res) {
    Menu.findOne({
        _id: req.params.id
    }, function (err, data) {
        if (err) {
            res.status(500).send({
                message: "Error in db",
                err: err
            });
        } else if (data == undefined) {
            res.status(404).send({
                message: "No object with id exist"
            });
        } else {
            data.remove(function (err, data) {
                res.status(200).send({
                    message: "Data was removed"
                });
            });
        }
    });
});

module.exports = apiRoute;