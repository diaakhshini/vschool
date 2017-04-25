 var mongoose = require("mongoose");
 var Schema = mongoose.Schema;
 var restaurantSchema = new Schema({
     name: String,
     cost: Number,
     type: String

 });




 module.exports = mongoose.model("Restaurant", restaurantSchema);