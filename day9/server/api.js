var express = require("express");
var mongoose = require("mongoose");
var apiRouter = express.Router();
var Menu = require("./data.js");

apiRouter.get("/data", function (req, res) {
 Menu.find({}, function(err,data){
     if(err){
      res.status(500).send({message: error });   
     }else{
         res.status(200).send({message:"success", data: data})
     }
 }) 
});
apiRouter.post("/data", function (req, res) {
    var newMenu = new Menu(req.body);
    newMenu.save(function (err, result) {
        if (err) {
            res.status(500).send({massge: " this is the error" + err})
        }else{
            res.status(200).send({massge: "success",data:result})        }
    })    
});
apiRouter.put ("/data/:id", function (req, res){
  Menu.findOne({_id : req.params.id}, function(err, data){
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
apiRouter.post("/data/:id", function (req, res){
  Menu.findOne({_id : req.params.id}, function(err, data){
        if(err){
            res.status(500).send({massge: " this is the error" + err})
        }else if(data == undefined) {
            res.status(404).send({massge: "no such id"})
        }else {
            
            data.comments.push({Person:req.body.Person,Comment:req.body.Comment});
            console.log(req.body.Person+" "+req.body.Comment)
            data.save();
            res.status(200).send({message:"date updatd", data:data});    
            }
    });
});
apiRouter.delete("/data/:id",function(req, res){
    Menu.findOne({_id:req.params.id}, function(err,data){
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
apiRouter.delete("/data/:id/:index",function(req, res){
    Menu.findOne({_id:req.params.id}, function(err,data){
        if(err){
          res.status(500).send({massge: " this is the error" + err})  
        }
        else if(data == undefined){
           res.status(404).send({massge: " this is the error" + err})  
        }
        else{
            data.comments.splice(req.params.index, 1);
            data.save(function(err,data){
                if(err){
                    console.log(err)
                }else{
                    res.status(200).send({massge: "success",data: data}) 
                }
            })
        }
    });
});
module.exports = apiRouter;