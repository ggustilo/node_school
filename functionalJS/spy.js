function Spy(target, method) {
	var originalFunction = target[method];

	var spy = {
		count : 0
	};

	target[method] = function() {
		spy.count ++;
		console.log(this.count);
		return originalFunction.apply(target, arguments);
	}
	return spy;
}

module.exports = Spy;