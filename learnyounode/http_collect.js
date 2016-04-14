var http = require('http');
var concat = require('concat-stream');

function requestData(url, index, callback) {
    http.get(url, function(response) {
        response.pipe(concat(function(data) {
            callback(index, data.toString());
        }));
    });
}

module.exports.requestData = requestData;
