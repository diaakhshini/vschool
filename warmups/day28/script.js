$("#submit").click(function() {
  $.ajax({
    url: "http://swapi.co/api/people/1/",
    success: function(result) {
      $("#output").html(result.name);
    }
  });
});

//document.getElementById("btn").addEventListener("click", function(){

    
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if(xhr.readyState  == 4 && xhr.status == 200) {
    var strData = xhr.responseText;
    var data = JSON.parse(strData);
      var pokemonNumber=parseInt(document.getElementById("number").value);
         document.getElementById("output").innerHTML = data.objects[0].pokemon[pokemonNumber].name;  
    
  } else if(xhr.readyState  == 4 && xhr.status != 200) {
    console.log(xhr.status);
  }
};

xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true);
xhr.send();
    
    
    
//});









