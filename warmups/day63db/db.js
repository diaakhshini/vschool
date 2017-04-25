var mongodb = require("mongodb");
//setup
var clint = mongodb.mongoClient;
var URL = "mongodb://localhost:27017/restaurant";
connect(URL, function (err, db) {
    if (err) {
        console.log(err);

    } else {
        var collection = db.collection("menu");
        collection.insert({
                name: "taco",
                cost: 4000,
                type: "main"
            },

            function (err, result) {
                collection.find().toArray(function (err, docs) {
                    console.log(docs);
                    db.close();
                });
            });

    }
});