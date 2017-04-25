var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProductsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    imgUrl: String,

    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    section: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model("Products", ProductsSchema);