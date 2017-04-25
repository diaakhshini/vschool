var mongoose = require("mongoose");
var Schema = mongoose.signIn;
var userName = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
});
module.exports = mongoose.model("user", userName);