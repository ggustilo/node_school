var q = require('q');

var alwaysThrows = function () {
    throw new Error("OH NOES");
};

var iterate = function (int) {
    console.log(int);
    return int + 1;
};

return q.fcall(iterate, 1)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(alwaysThrows)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(null, console.log);
