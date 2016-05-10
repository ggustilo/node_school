var combine = require('stream-combiner');
var split = require('split');
var through = require('through2');
var zlib = require('zlib');


module.exports = function() {
	var newGenre;

	var write = function(chunk, _, next) {
		var obj = JSON.parse(chunk);
		if (obj.type === "genre") {
			if (newGenre) {
				this.push(JSON.stringify(newGenre) + "\n");
			}
			newGenre = { name: obj.name, books: []};
		}
		else if (obj.type === "book") {
			newGenre.books.push(obj.name);
		}
		next();
	};

	var end = function(next) {
		if (newGenre) {
			this.push(JSON.stringify(newGenre) + "\n");
		}
		next();
	};

	var genrefy = through(write, end);
	return combine(
		genrefy,
		zlib.createGzip()
	);
};