var http = require('http');
var url = require('url');

// 2013-08-10T12:10:15.474Z
var makeParseTimeJSON = function(timestamp) {
    var time = timestamp.split("T")[1].split(":")
    var toBeJSON = {
        // hour: parseInt(time[0]),
        hour: 12,
        minute: parseInt(time[1]),
        second: parseInt(time[2].split(".")[0])
    }
    return JSON.stringify(toBeJSON);
}

var makeUnixTimeJSON = function(timestamp) {
    var toBeJSON = {
        unixtime: Date.parse(timestamp),
    }
    return JSON.stringify(toBeJSON);
}

var server = http.createServer(function(request, response) {
    var jsonObj;
    var reqUrlObj = url.parse(request.url, true);
    var timestamp = reqUrlObj.query['iso'];
    if (reqUrlObj.pathname === '/api/parsetime') {
        jsonObj = makeParseTimeJSON(timestamp);
    }
    else if (reqUrlObj.pathname = '/api/unixtime') {
        jsonObj = makeUnixTimeJSON(timestamp);
    }

    response.writeHead(200, {'Content-Type': 'application/json'});
    response.write(jsonObj);
    response.end();
});
server.listen(process.argv[2]);