var duplexer = require('duplexer2');
var stream = require('stream');
var countries = {};


module.exports = function(counter) {
	var writable = new stream.Writable({objectMode:true});

	return duplexer(writable, counter);
};



counter.on('end', () => {
	counter.setCounts(countries);
});