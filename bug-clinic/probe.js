var jstrace = require('jstrace');
var http = require('http');

var server = http.createServer(function(req, res) {
	jstrace("request:start", {"url" : req.url});

	var statusCode
	var payload;

	if (req.method === "GET" && req.url === "/prognosis") {
		statusCode = 200;
		payload = { "ok" : true };
	}
	else {
		statusCode = 404;
		payload = {"error" : "notfound"};
	}
	res.statusCode = statusCode;
	res.end(JSON.stringify(payload));

	jstrace("request:end", {statusCode : statusCode, body : payload});
});
server.listen(9999, function() {
	console.error("up");
});
