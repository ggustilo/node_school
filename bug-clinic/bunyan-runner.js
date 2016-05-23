var scenario = require('./monitor.js');

var bunyan = require('bunyan');
var log = bunyan.createLogger({name: "scenarioLogger"});

scenario(log, function(value) {
	log.info("value at finish is: ", value)
});