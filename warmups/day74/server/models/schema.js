var mongoose = require("mongoose");
var Schema = mongoose.Schema;
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
    isBoolean: {
        type: Boolean
    },


});