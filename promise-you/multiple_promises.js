var q = require('q');

var deferFirst = q.defer();
var deferSecond = q.defer();

var all = function(defer1, defer2) {
    var deferAll = q.defer();
    var counter = 0;
    var posResponses = [];

    defer1.then(function(value){
        posResponses.push(value);
        counter++;
        if (counter === 2) {
            deferAll.resolve(posResponses);
        }
    }, deferAll.reject);

    defer2.then(function(value){
        posResponses.push(value);
        counter++;
        if (counter === 2) {
            deferAll.resolve(posResponses);
        }
    }, deferAll.reject);

    return deferAll.promise;
};

all(deferFirst.promise, deferSecond.promise).then(console.log);

setTimeout(function(){
    deferFirst.resolve("PROMISES");
    deferSecond.resolve("FTW");
},200);