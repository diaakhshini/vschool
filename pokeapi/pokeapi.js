
    
    
var request = require('request');
request('http://pokeapi.co/api/v1/pokemon/25/', function (error, response, body) {
  if (!error && response.statusCode == 200) {
   var data = JSON.parse(body);
      console.log(data.name + " " + data.attack + " " +data.national_id);
  } else {
      console.log(error);
  }
})
