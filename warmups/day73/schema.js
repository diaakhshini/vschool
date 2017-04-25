var mongoose = require("mongoose");
var Schema = mongosse.Schema;
var TodoSchema = new Schema({
    name: {
        type: String,
        required: true,
        uniqe: true
    },
    cost: {
        type: Number,
        required: true,
    },
    isBoolen: {
        type: true
    },


});