//var express = require("express");
//var animals = require("./animals.js");
//var bodyParser = require("body-parser");
//var uuid = require("uuid");
//var validate = require("./utils.js");
//
////get port
//var port = process.env.Port || 8080;
//
////setup server
//var app = express();
//
////setup server to handle json
//app.use(bodyParser.urlencoded({
//    extended: false
//}));
//app.use(bodyParser.json());
//
//app.get("/animals", function (req, res) {
//    console.log(req.query);
//    //    if(Object.keys(req.query).length === 0 ){
//    //          res.status(200).send({
//    //        "messsage": "Here is the data",
//    //        data: animals
//    //    });
//    //    }else {
//    //        for(key in )
//    //    }
//
//});
//
//app.get("/animals/:id", function (req, res) {
//    for (var i = 0; i < animals.length; i++) {
//        if (req.params.id == animals[i].id) {
//            res.status(200).send({
//                "messsage": "Here is the object with id of " + req.params.id,
//                data: animals[i]
//            })
//        }
//    }
//    res.status(400).send({
//        "messsage": "No item with id of " + req.params.id + " exisits"
//    });
//});
//
//app.post("/animals", function (req, res) {
//    var data = {
//        id: uuid.v4(),
//        name: req.body.name,
//        age: req.body.age,
//        isTasty: req.body.isTasty
//    };
//    var didPass = validate(data);
//    if (didPass.pass == false) {
//        res.status(400).send({
//            message: didPass.failure
//        });
//    } else {
//        animals.push(data);
//    }
//});
//
//app.delete("/animals/:id/", function (req, res) {
//    for (var i = 0; i < animals.length; i++) {
//        if (animals[i].id == req.params.id) {
//            animals.splice(i, 1);
//            res.status(200).send({
//                message: "You deleted item with id of " + req.params.id
//            });
//        }
//    }
//    res.status(404).send({
//        "message": "No item with id of " + req.params.id + " exisits"
//    });
//});
//
//app.put("/animals/:id", function (req, res) {
//    for (var i = 0; i < animals.length; i++) {
//        if (req.params.id == animals[i].id) {
//            var data = {
//                id: uuid.v4(),
//                name: req.body.name,
//                age: req.body.age,
//                isTasty: req.body.isTasty
//            };
//            var didPass = validate(data);
//            if (didPass.pass == false) {
//                res.status(400).send({
//                    message: didPass.failure
//                });
//            } else {
//                animals[i] = data;
//                res.status(200).send({
//                    "message": "Database has been updated"
//                });
//            }
//        }
//    }
//    res.status(404).send({
//        "message": "No such item with id of " + req.params.id
//    });
//})
//
//app.listen(port, function () {
//    console.log("Server has started on port " + port);
//})