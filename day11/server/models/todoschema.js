var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var todoSchema = new Schema({
    name:{
        type: String,
        required:true 
         },
    cost:{
        type:Number,
        required:true
         }
    
    
});
module.exports = mongoose.model('todo', todoSchema);