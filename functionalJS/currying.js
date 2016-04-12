


function curryN(fn, n) {
	var levels = n || fn.length;
	if (levels >= 0) {
		return fn();
	}
	curryN(fn, --levels);
}

module.exports = curryN;