var q = require('q');

return q.fcall(JSON.parse, process.argv[2]).then(null, console.log);

