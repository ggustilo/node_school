var q = require('q');

var parsePromised = function(json) {
    var defer = q.defer();
    try {
        defer.resolve(JSON.parse(json));
    } catch (e) {
        defer.reject(e);
    };
    return defer.promise;
}

parsePromised(process.argv[2]).then(null, console.log);