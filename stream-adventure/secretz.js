var crypto = require('crypto');
var zlib = require('zlib');
var tar = require('tar');
var parser = tar.Parse();
var decipher = crypto.createDecipher(process.argv[2], process.argv[3]);
var concat = require('concat-stream');

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
	if (e.type !== 'File') return;

	var hash = crypto.createHash('md5', { encoding: 'hex' });
	e.pipe(hash).pipe(concat(function(h){
			console.log(h + ' ' + e.path);
	}));
});

process.stdin.pipe(decipher)
			.pipe(zlib.createGunzip())
			.pipe(parser);

