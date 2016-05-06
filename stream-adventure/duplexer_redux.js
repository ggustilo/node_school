var duplexer = require('duplexer2');
var stream = require('stream');
var through = require('through2').obj;
var countries = {};

var incrementCountries = function(obj) {
	var occurrence = obj["country"];
	countries[occurrence] = (countries[occurrence] || 0) + 1;
};

module.exports = function(counter) {
	var write = function(chunk, _, next) {
		incrementCountries(chunk);
		next();
	};

	var end = function() {
		console.log(countries);
		counter.setCounts(countries);
	};

	var writable = through(write, end);
	var duplex = duplexer({objectMode:true}, writable, counter);
	return duplex;
};

