var express = require("express");
var mongoose = require("mongoose");
var apiRouter = express.Router();
var Todo = require("../models/todoschema.js");

apiRouter.get("/", function (req, res) {
 Todo.find({}, function(err,data){
     if(err){
      res.status(500).send({message: error });   
     }else{
         res.status(200).send({message:"success", data: data})
     }
 }) 
});
apiRouter.post("/", function (req, res) {
    var newTodo = new Todo(req.body);
    newTodo.save(function (err, data) {
        if (err) {
            res.status(500).send({massge: " this is the error" + err})
        }
        else{
            res.status(200).send({massge: "success" , data})       
        }
    })    
});
apiRouter.put ("/:id", function (req, res){
  Todo.findOne({_id : req.params.id}, function(err, data){
        if(err){
            res.status(500).send({massge: " this is the error" + err})
        }else if(data == undefined) {
            res.status(404).send({massge: "no such id"})
        }else {
            for(key in req.query){
                data[key]= req.query[key];
                
            }
            data.save();
            res.status(200).send({message:"date updatd", data:data});    
            }
    });
});

apiRouter.delete("/:id",function(req, res){
    Todo.findOne({_id:req.params.id}, function(err,data){
        if(err){
          res.status(500).send({massge: " this is the error" + err})  
        }
        else if(data == undefined){
           res.status(404).send({massge: " this is the error" + err})  
        }
        else{
            data.remove(function(err, data){
                if(err){
                 res.status(500).send({massge: " this is the error" + err})   
                }
                else{
                   res.status(200).send({massge: "success",data: data})  
                }
            });
        }
    });
});

module.exports = apiRouter;