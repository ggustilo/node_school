var slice = Array.prototype.slice

function logger(namespace) {
	return function () {
+		var args = slice.call(arguments).join(' ');
+		var allArgs = [namespace, args];
+		console.log.apply(console, allArgs);
+	}
}

module.exports = logger;