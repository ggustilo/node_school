var http = require('http');
var fs = require('fs');
var concat = require('concat-stream');

var server = http.createServer(function(request, response) {
   fs.createReadStream(process.argv[3]).pipe(concat(function(data){
        response = data.toString();
    }));
});
server.listen(process.argv[2]);