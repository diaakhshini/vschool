function getRandom(min,max) { 
 return Math.floor(Math.random() * (max - min + 1) + min;
}
var Teacher = function(name) {
    var name = name;
    this.teacherName = "";
    this.health = 0;
    this.generate = function()  { 
    var index = getRandom(0, name.length -1);
    this.teacherName = name[index];
    
}
    
    }
    var possiblNames = ["Jacob", "Haitham", "Jameel", "Hiba"];
    
    for(var i = 0; i < 100; i++) {
    tembTeacher = new Teacher(possiblNames);
    tembTeacher.generate();
    console.log(tembTeacher.teacherName);
      
    }
    
    

