var net = require('net');
var formatDate = require('format-date');

var server = net.createServer(function(socket) {
    // "YYYY-MM-DD hh:mm"
    var date = formatDate('{year}-{month}-{day} {hours}:{minutes}\n');
    socket.end(date);
});

server.listen(process.argv[2]);