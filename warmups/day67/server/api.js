var express = require("express");
var mongoose = require("mongoose");
var Menu = require("./restaurant.js");
var bodyParser = require("body-parser");

var apiRouter = express.Router();

//setup server to handle json
apiRouter.use(bodyParser.urlencoded({
    extended: false
}));
apiRouter.use(bodyParser.json());


apiRouter.get("/menu", function (req, res) {
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
apiRouter.post("/menu", function (req, res) {
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
apiRouter.delete("/menu/:id", function (req, res) {
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
apiRauter.put("/:id", function (req, res) {
    Menu.findOne({
        _id: req,
        params.id
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