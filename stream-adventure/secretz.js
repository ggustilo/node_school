var crypto = require('crypto');
var zlib = require('zlib');
var tar = require('tar');
var parser = tar.Parse();
var combine = require('stream-combiner');
var decipher = crypto.createDecipher(process.argv[2], process.argv[3]);

parser.on('entry', function(e) {
	this.push(e + ' ' + e.path + '\n');
});

combine(
	process.stdin,
	zlib.createGunzip(),
	decipher,
	parser,
	crypto.createHash('md5', { encoding: 'hex'}),
	process.stdout
)