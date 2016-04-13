var http = require('http');
var concat = require('concat-stream');

// function requestData() {
    var request = http.get(process.argv[2], function(response) {
        response.pipe(concat(function(data) {
            console.log(data.length);
            console.log(data.toString());
        }));
    });
// }

