var stackup = require('stackup');
var trycatch = require('trycatch');
trycatch.configure({'long-stack-traces': true});
var readFile = require("fs").readFile;

module.exports = scenario;

function scenario(jsonPath, cb) {
	readFile(jsonPath, {encoding : "utf8"},
		trycatch(function(contents) {
			JSON.parse(contents);
		}, function(error) {
			cb(error);
		})
	);
}

