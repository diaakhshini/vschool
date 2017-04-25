 var mongoose = require("mongoose");
 var Schema = mongoose.Schema;
 var restaurantSchema = new Schema({
    name:{
       type: String,
        required: true
    },
     grade:{
         type: Number,
         required: true
         
     },
     date:{
          type: String,
         required: true
     },
     time: {
          type: String,
         required: true
     }
    
    

 });
 module.exports = mongoose.model("Restaurant", restaurantSchema);