var through = require('through2');
var http = require('http');

var server = http.createServer(function(req, res){
	if (req.method === 'POST') {
		req.pipe(through(write, end)).pipe(res);
	}
});

var write = function(chunk, _, next) {
	this.push(chunk.toString().toUpperCase());
	next();
};

var end = function(done) {
	done();
};

server.listen(process.argv[2]);

