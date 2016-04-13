var http = require('http');

// var url = process.argv[2];

var request = http.get(process.argv[2], function(response){
	response.on("data", function(data){
		console.log(data.toString());
	});
	response.on("error", function(error){
		console.log("There was an error: " + error);
	});
	response.on("end", function(end){
		console.log();
	});
});