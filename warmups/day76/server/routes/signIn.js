var express = require("express");

var User = require("../models/auth.js");
var authRoutes = express.Router();

var jwt = require("jsonwebtoken");

var config = require("../config");

var userRoute = express.Router();


userRoute.post("/signup", function (req, res) {
    User.find({}, function (err, data) {
        if (err) {
            res.status(500).send(err);

        } else if (data.length > 0) {
            res.status(400).send({
                message: "User Name is Taket"
            });
        } else {
            var newUser = new User(req.body);
            newUser.save(function (err, result) {
                if (err) {
                    res.status(500).send(err);

                } else {
                    res.status(200).send({
                        message: "you have SignUp"
                    });
                }
            });
        }
    });
});

userRoute.post("/signin", function (req, res) {
    User.findOne({
        username: req.body.username
    }, function (err, user) {
        if (err) {
            res.status(500).send(err);

        } else if (user == undefined) {
            res.status(404).send({
                message: "No User name in DataBase"
            });
        } else if (user.password !== req.body.password) {
            res.status(404).send({
                message: "password is Wrong "
            });

        } else {
            var token = jwt.sign(user.toObject(), config.secret, {
                expiresIn: "2h"
            });

            // Send the token back to the client app.
            res.send({
                token: token,
                user: user.toObject(),
                success: true,
                message: "Here's your token!"
            })
            res.status(200).send({
                message: "you Have sign in "
            });

        }
    });

});

module.exports = userRoute;