 var mongoose = require("mongoose");
 var Schema = mongoose.Schema;
 var personSchema = new Schema({
     name: String,
     age: Number,
     isAlive: Boolean

 });




 module.exports = mongoose.model("Person", personSchema);