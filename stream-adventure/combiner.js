var combine = require('stream-combiner');
var split = require('split');
var stream = require('stream');
var through = require('through2').obj;
var zlib = require('zlib');

// Example input: (newline separated)
//
// {"type":"genre","name":"cyberpunk"}
// {"type":"book","name":"Neuromancer"}
// {"type":"book","name":"Snow Crash"}
// {"type":"genre","name":"space opera"}
// {"type":"book","name":"A Deepness in the Sky"}
// {"type":"book","name":"Void"}

// Example output:
//
// {"name":"cyberpunk","books":["Neuromancer","Snow Crash"]}
// {"name":"space opera","books":["A Deepness in the Sky","Void"]}

module.exports = function() {
	var write = function(chunk, _, next) {
		this.push(chunk);
		next();
	};

	var end = function(done) {
		done();
	};

	var read = zlib.createGZip();

	var writable =  through(write, end);
	var readable = stream.Readable
	return combine(
		writable,
		
		// group books into genres,
		// then gzip the output
	)
}