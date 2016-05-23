var replify = require("replify");
var replpad = require("replpad");
var http = require('http');

module.exports = scenario;

function scenario(callback) {
	var server = http.createServer(function (req, res) {
		res.end("hello");
	});
	server.__message = "REPLs are neat";
	var repl = replify({name: "bug-clinic", start: replpad}, server);

	server.listen(8080, function() {
		callback(server, repl);
	})
}