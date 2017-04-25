var express = require('express');
var uuid = require("uuid");
var app = express();
var port = process.env.Port || 8080;
var validate = require("./validate.js");

var bounties = require('./jsonObject.js');
var bodyParser = require('body-parser');

//setup to handle json
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.get('/bounty/', function (req, res) {
    if (Object.keys(req.query).length === 0) {
        res.status(200).send({
            "messsage": "Here is the data",
            data: bounties
        });
    } else {
        var filtered = [];
       n req.query) {
            console.log(req.query[key])
            for (var i = 0; i < bounties.length; i++) {
                console.log(bounties[i][key])
                if (bounties[i][key] === req.query[key]) {
                    console.log(bounties[i][key])
                    filtered.push(bounties[i])
                }
            }
        }
        res.status(200).send({
            "messsage": "Here is the data",
            data: filtered
        });
    }

});
app.post('/bounty', function (req, res) {
    var data = {
        id: uuid.v4(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        living: req.body.living,
        bountyAmount: req.body.bountyAmount,
        type: req.body.type
    };
    var didPass = validate(data);
    if (didPass.pass == false) {
        res.status(400).send({
            message: "did Pass failure"
        });
    } else {
        bounties.push(data);
        res.status(200).send(bounties);
    }


});

app.delete("/bounty/:id", function (req, res) {
    console.log(req.params.id);
    var id = req.params.id;
    for (var i = 0; i < bounties.length; i++) {
        if (bounties[i].id == id) {
            bounties.splice(i, 1);
            res.send({
                message: "the bounty has been deleted"
            });
        }


    }
    res.send({
        message: "this id is not matched "
    });
});
app.put("/bounty/:id", function (req, res) {
    if (Object.keys(req.query).length === 0) {
        for (var i = 0; i < bounties.length; i++) {
            if (req.params.id == bounties[i].id) {
                var data = {
                    id: uuid.v4(),
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    living: req.body.living,
                    bountyAmount: req.body.bountyAmount,
                    type: req.body.type
                };
                var didPass = validate(data);
                if (didPass.pass == false) {
                    res.status(400).send({
                        message: didPass.failure
                    });
                } else {
                    bounties[i] = data;
                    res.status(200).send({
                        "message": "Database has been updated"
                    });
                }
            }
        }
        res.status(404).send({
            "message": "No such item with id of " + req.params.id
        });
    } else {
        for (key in req.query) {
            //            console.log(req.query[key])
            for (var i = 0; i < bounties.length; i++) {
                //                console.log(bounties[i][key])
                if (req.params.id == bounties[i].id) {
                    bounties[i][key] = req.query[key];
                    //                    console.log(bounties[i][key])

                } else {
                    res.status(400).send({
                        message: "the id didn't match"
                    });
                }
            }

        }
        res.status(200).send({
            "messsage": "has been updated",
            data: bounties
        });
    }
});

app.listen(port, function () {
    console.log('Server is running..' + port);
});