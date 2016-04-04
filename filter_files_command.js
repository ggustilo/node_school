var filter = require('./filter_files');

filter.filter_files(process.argv[2], process.argv[3], function(error, response){
	if (error) console.log(error);
	response.forEach(function(file){
		console.log(file);
	});
});