var fs = require('fs');
var http = require('http');
var concat = require('concat-stream');

//
// fs.createReadStream(process.argv[3]).pipe(concat(function(data){
//     response.write(data.toString());
// }));

var readFile = function(pathname, callback) {
    fs.readFileSync(pathname, callback(url, logBody));
};

var makeRequest = function(url, callback) {
    http.get(url, function(response){
        var allData = [];
        response.on("data", function(data){
            allData.push(data);
        });
        response.on("end", function(data) {
            callback(allData);
        });
        response.on("error", function(error) {
            console.log(error);
        });
    });
};

var logBody = function(response) {
    console.log(response.body);
};

readFile(process.argv[2], makeRequest);