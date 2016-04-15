var http = require('q-io/http');

var logger = function(response) {
	console.log(JSON.parse(response));
}

http.read("http://localhost:7000")
	.then(function (user_id) {
		return http.read("http://localhost:7001/" + user_id);
	})
	.then(logger)
	.done();