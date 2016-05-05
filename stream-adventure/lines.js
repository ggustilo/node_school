var through = require('through2');
var split = require('split');

var counter = 0;

process.stdin
	.pipe(split())
	.pipe(through(function (line, _, next) {
		if (counter % 2 === 0) {
			this.push("\n" + line.toString().toLowerCase());
			counter++;
			next();
		}
		else if (counter % 2 === 1) {
			this.push("\n" + line.toString().toUpperCase());
			counter++
			next();
		}
		else {
			console.log("Something went wrong");
		}
	})).pipe(process.stdout);
