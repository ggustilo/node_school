var q = require('q');
var defer = q.defer();

var success = function(value) {
    console.log(value);
}

var rejection = function(error) {
    console.log(error.message);
}

defer.promise.then(success, rejection);

setTimeout(defer.reject, 300, new Error("REJECTED!"));