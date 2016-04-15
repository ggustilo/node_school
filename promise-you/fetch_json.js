var http = require("q-io/http");

var logger = function(response) {
	console.log(JSON.parse(response));
}

http.read("http://localhost:1337").then(logger);


