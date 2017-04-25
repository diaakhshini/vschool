var Car = function(name);
this.name = name;
this.run = function(){
    console.log("turn on");
    
}


var bmw = new Car("BMW");
console.log(bmw.name);
bmw.run();