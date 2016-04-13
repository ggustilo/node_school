var call = require("./http_collect");

var urls = process.argv.slice(2);

var responses = [];

var callback = function(error, response, id) {
	if (error) console.log(error);
	console.log("ID" + id);
	responses.splice(id, 0, response);
	// if (responses.length == 3) {
	// 	responses.forEach(function(responses){
	// 		console.log(response);
	// 	});
	// }
};

for (i = 0; i < urls.length; i++) {
	call.make_request(urls[i], i, callback);
}