var crypto = require('crypto');
var zlib = require('zlib');
var tar = require('tar');
var parser = tar.Parse();
var combine = require('stream-combiner');
var decipher = crypto.createDecipher(process.argv[2], process.argv[3]);
var hasher = crypto.createHash('md5', { encoding: 'hex' });

// get stuff on stdin
// unzip it
// parse it
// decrypt it
// get the file contents
// get the file name
// hash the file contents
// output the file contents
// output a space and the filename
// output a newline

parser.on('entry', function(e) {
	var hashedContent = e.pipe(hasher);
	var filename = e.path;
	console.log(hashedContent + ' ' + filename + '\n');
});

process.stdin.pipe(zlib.createGunzip())
			.pipe(decipher)
			.pipe(parser)
			.pipe(process.stdout);

