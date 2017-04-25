var Student = function(name,dob,phone,grade ,result){
    
    this.name = name ;
    this.dob = parseInt(dob);
    this.phone = phone;
    this.grade = grade;
    this.result = function(data){
        
        if(data > 50){
            console.log ("you passed")
        }else {
            console.log("you fail")
        }
       
        
    }
     this.age = function(age){
       var d = new Date();
       var date = d.getFullYear();
         
         age = date - this.dob;
            
            console.log(age);
            
        }
    
    
}

var studentOne = new Student("tareq" ,1994 , "03/565656" , 90 );
studentOne.result(90);
studentOne.age();
var studentTwo = new Student("ahmad" ,1998 , "71/333222" , 75 );
studentTwo.result(75);
studentTwo.age();
var studentThree = new Student("malek" ,2009 , "03/222555" , 65);
studentThree.result(65);
studentThree.age();
var studentFour = new Student("rami" ,1998 , "71/444666" , 40);
studentFour.result(40);
studentFour.age();

