var mongoose = require("mongoose");
var person = require("./person.js")
mongoose.connect("mongodb://localhost/students");



var Diaa = new person({
    name: "Yasser",
    age: 99,
    isAlive: true || false
});
//Diaa.save(function (err, newPerson) {
//    if (err) {
//        console.log(err);
//
//    } else {
//        console.log(newPerson);
//    }
//});

person.find({}, function (err, students) {
    if (err) {
        console.log(err);

    } else {
        console.log(students);
    }
});