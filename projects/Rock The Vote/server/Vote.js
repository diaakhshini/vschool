 var mongoose = require("mongoose");
 var Schema = mongoose.Schema;
 var VoteSchema = new Schema({
     title: {
         type: String
     },
     description: {
         type: String
     },
     likes: {
         type: Number,
         default: 0
     },

     comment: [String]
 });
 module.exports = mongoose.model("Vote", VoteSchema);