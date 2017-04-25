var express = require("express");
var User = require("../models/auth.js");
var userRoute = express.Router();


userRoute.post("/singUp", function (req, res) {
    user.find({}, function (err, data) {
        if (err) {
            res.status(500).send(err);
        } else if (data.length > 0) {
            res.status(400).send({
                message: "user name is taket"
            });
        } else {
            var newUser = new User(req.body);
            newUser.save(function (err, result) {

            });
        }
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send({
                "message": "you have sign"
            });
        }
    });
});
//userRoute.post("/signIn", function(req, res){
//    user.findOne({
//        userName: req.body.userName
//        function(err, data){
//        if (err)
//        res.status(400).send({"massage": "no user name in data"})
//   
//               else
//    }
//    })
//})