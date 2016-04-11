module.exports = function arrayMap(arr, fn, thisArg) {
	return arr.reduce(function(newArray, item, index, arr) {
		newArray.push(fn.call(thisArg, item, index, arr));
		return newArray;
	}, []);
}