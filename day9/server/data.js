var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var personSchema = new Schema({
    name: String,
    type: String,
    price: Number,
    imgUrl:String,
    vote:{
        type:Number,
        default:0
    }
    ,comments:[]
    
});
module.exports = mongoose.model('Name', personSchema);