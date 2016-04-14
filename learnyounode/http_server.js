var http = require('http');
var fs = require('fs');
var concat = require('concat-stream');

var server = http.createServer(function(request, response) {
   fs.createReadStream(process.argv[3]).pipe(concat(function(data){
        response.write(data.toString());
    }));
});
server.listen(process.argv[2]);


// official solution


// var http = require('http')
// var fs = require('fs')
//
// var server = http.createServer(function (req, res) {
//     res.writeHead(200, { 'content-type': 'text/plain' })
//
//     fs.createReadStream(process.argv[3]).pipe(res)
// })
//
// server.listen(Number(process.argv[2]))