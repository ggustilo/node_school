// var fs = require('fs');
// filePath = process.argv[2];
// var bufferObj = fs.readFileSync(filePath);
// var str = bufferObj.toString();
// var stringArry = str.split('\n')
// var numLines = stringArry.length - 1
// console.log(numLines);

var fs = require('fs');
filePath = process.argv[2];
var bufferObj = fs.readFile(filePath, function(error, data) {
	if (error) return console.error(error);
  console.log(data.toString().split('\n').length - 1);
});
// var str = bufferObj.toString();
// var stringArry = str.split('\n')
// var numLines = stringArry.length - 1
// console.log(numLines);