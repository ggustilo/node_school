var q = require('q');
var defer = q.defer();

var logger = function(value) {
    console.log(value);
}

defer.promise.then(logger);


setTimeout(function() {
    defer.resolve("RESOLVED!");
}, 300);



