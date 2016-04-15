var q = require('q');
var defer = q.defer();


var attachTitle = function(doctor) {
    return "DR. " + doctor;
};

defer.promise.then(attachTitle)
    .then(console.log);
defer.resolve("MANHATTAN");