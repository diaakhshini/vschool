var express = require("express");
var authRouter = express.Router();

var User = require("../models/userSchema.js");
var jwt = require("jsonwebtoken");
var config = require("../config.js");
authRouter.post("/signup", function (req, res) {
    User.find({
        username: req.body.username
    }, function (err, data) {
        if (err) {
            res.status(500).send(err);
        } else if (data.length > 0) {
            res.status(400).send({
                "message": "usrename is not corect"
            })
        } else {
            if (req.body.password != undefined) {
                var salt = bcrypt.genSaltSync(10);
                var hash = bcrypt.hashSync(req.body.password, salt);
                req.body.password = hash;
                console.log( * req.body.password);
            }
            var newUser = new User(req.body);
            newUser.save(function (err, data) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.status(200).send({
                        massge: "success",
                        data: data
                    });
                }
            });
        }

    });
});
authRouter.post("/signin", function (req, res) {
            User.findOne({
                    username: req.body.username
                }, function (err, user) {
                    if (err) {
                        res.status(500).send(err);
                    } else if (user == undefined) {
                        res.status(400).send({
                            "message": "usrename is dose corect"
                        });

                    } else {

                        bcrypt.compare(req.body.password, data.password, function (err, result) {
                            if (result) {
                                //send the json web token
                                var token = jwt.sign(data.toObject(), config.secret, {
                                    "expiresIn": "1h"
                                });
                                res.status(200).send({
                                    "message": "Here is your token sir",
                                    token: token,
                                    priv: data.privilage
                                });
                            } else {
                                res.status(403).send({
                                    "message": "Passwords did not match"
                                });
                            }
                        });
                    })
            }); module.exports = authRouter;