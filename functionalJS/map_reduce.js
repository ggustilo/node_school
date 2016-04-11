module.exports = function arrayMap(arr, fn, thisArg) {
	return arr.reduce(function(newArray, item, index, arr) {
		newArray.push(fn.call(thisArg, item, index, arr));
		return newArray;
	}, []);

	// Question: why use reduce to do this, when the following also works?
	
	return Array.prototype.map.call(arr, fn);
}