var filter = require('./filter_files');

filter.filter_files(process.argv[2], process.argv[3], function(error, response){
	if (error) console.log(error);
	response.forEach(function(file){
		console.log(file);
	});
});


// var fs = require('fs');
// var path = require('path');
//
// fs.readdir(process.argv[2], function(error, filesArr) {
//    if (error) return console.error(error);
//     filesArr.forEach(function(file){
//        if (path.extname(file) === ("." + process.argv[3])) {
//            console.log(file);
//        }
//     });
// });
