var http = require('http');


function make_request(url, id, callback) {
	var request = http.get(url, function(response){
		console.log(response.headers);
		var allData = [];
		response.on("data", function(data){
			allData.push(data.toString());
		});
		response.on("error", function(error){
			callback(error);
		});
		response.on("end", function(end){
			var data = allData.join('');
			callback(null, data, id);
		});
	});
}

module.exports.make_request = make_request;