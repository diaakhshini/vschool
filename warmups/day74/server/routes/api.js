var express = require("express");
var mongoose = require("mongoose");
var signIn = require("./signIn.js")
var Schema = require("./schema.js");
var bodyParser = require("body-parser");
var apiRouter = express.Router();


apiRouter.use(bodyParser.urlencoded({
    extended: false
}));
apiRouter.use(bodyParser.json());


apiRouter.get("/Schema", function (req, res) {
    SchemaSchemaSchema.find({}, function (err, data) {
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
apiRouter.post("/Schema", function (req, res) {
    var newItem = new Schema(req.body);
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
apiRouter.delete("/Schema/:id", function (req, res) {
    Schema.findOne({
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
apiRouter.put("/Schema/:id", function (req, res) {
    Schema.findOne({
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