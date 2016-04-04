var fs = require('fs');
var path = require('path');


function filter_files(dir, extension, callbackFunction) {
	var dirPath = dir;
	var ext = extension;

	fs.readdir(dirPath, function(error, filesArr) {
		if (error) return callbackFunction(error);
		var filteredFiles = [];
		filesArr.forEach(function(file) {
			if (path.extname(file) === ("." + ext)){
				filteredFiles.push(file);
			}
		});
		callbackFunction(null, filteredFiles);
	});
}

module.exports.filter_files = filter_files;