var Car = function(name, model, color){
    this.name = name || "BMW";
    this.model = model || "2002";
    this.color = color || "black";
    this.sbeed = function(){
       console.log(this.name + "go to barcking");
    }
    
    }
var BMW = new Car("BMW", "2015", "red");
console.log(BMW.name);
var student = {
    name : "diaa",
    age: 25,
    number:"03306622"
}

   console.log(student);
   console.log();