var mongoose = require("mongoose");
var restaurant = require("./restaurant.js")
mongoose.connect("mongodb://localhost/menus");



var menus = new restaurant({
    name: "fatoosh",
    cost: 4000,
    type: "apptaizer"
});
menus.save(function (err, newMenus) {
    if (err) {
        console.log(err);

    } else {
        console.log(newMenus);
    }
});

restaurant.find({}, function (err, menus) {
    if (err) {
        console.log(err);

    } else {
        console.log(menus);
    }
});