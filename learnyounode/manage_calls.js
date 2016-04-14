var call = require("./http_collect");

var urls = process.argv.slice(2);

var responses = [];

var manageCallbacks = function(indexNum, data) {
    responses.push({
        i: indexNum,
        data: data
    });
    if (responses.length === 3) {
        responses.sort(function(a,b) {
            return a.i - b.i;
        });
        responses.forEach(function(response) {
            console.log(response.data);
        });
    }
}

var getAllResponses = function(urls) {
    for (i = 0; i < urls.length; i++) {
        call.requestData(urls[i], i, manageCallbacks);
    }
};

getAllResponses(urls);