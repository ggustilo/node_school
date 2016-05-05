var trumpet = require('trumpet');
var tr = trumpet();
var through = require('through2');


var write = function(chunk, _, next) {
	this.push(chunk.toString().toUpperCase());
	next();
};

var end = function(done) {
	done();
};

var stream = tr.select('.loud').createStream();

stream.pipe(through(write, end)).pipe(stream);

process.stdin.pipe(tr).pipe(process.stdout);


