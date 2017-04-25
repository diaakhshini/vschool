var http = require("http");
var server = http.createServer(function (request, response) {
    console.log("I want go to the home");
    response.writeHeader(200, {
        "Content-Type": "text/plain"
    });
    response.write("Hello go with me to the home");
    response.end();

});
server.listen(8080);
console.log("I am running the server");