var express = require("express");
var mongoose = require("mongoose");
//var Section = require("./models/Section.js");
var Product = require("../models/Products.js");
var apiRouter = express.Router();
apiRouter.get("/", function (req, res) {
    //    console.log("get")
    Product.find({}, function (err, data) {
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
apiRouter.post("/", function (req, res) {
    //    console.log(req.body);
    var newItem = new Product(req.body);
    console.log(newItem);
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
apiRouter.delete("/:id", function (req, res) {
    Product.findOne({
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
apiRouter.put("/:id", function (req, res) {
    Product.findOne({
        _id: req.params.id
    }, function (err, data) {
        if (err) {
            res.status(500).send({
                massage: "Error in db",
                err: err
            });

        } else if (data == undefined) {
            res.status(404).send({
                message: "No object with id exist"
            });
        } else {
            for (key in req.query) {
                data[key] = req.query[key];
            }
            data.save();
            res.status(200).send({
                message: "Data update",
                data: data
            });
        }
    });
});
module.exports = apiRouter;