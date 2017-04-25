var counter = 20;
  var repeat = setInterval(function() {
      console.log("testt");
    counter--;
    if(counter > 0) {
        $("#c1").html("00:00:" + counter);
      
    }
   if(counter === 0) {
       $("#c1").html("The end of the world has come upon us");
       clearInterval(repeat);
   }
    
  }, 1000);