var http = require("http");
var fs = require("fs");
var filepath = "./index.html";
var server = http.createServer(function (request, response) {
    console.log("Hello go with me to the home");
    fs.readFile(filepath, "binary", function (err, file) {
        if (err) {
            response.writeHeader(500, {
                "content-type": "text, file"
            });
            response.write(err);
            response.end();
        } else {
            response.writeHeader(200, {
                "content-type": "text, html"
            });
            response.write(file, "binary");
            response.end();

        }
    });
});
server.listen(8080);
console.log("I am running the server");