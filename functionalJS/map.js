function doubleAll(numbers) {
	var doubledNums = numbers.map(function(num) {
		return num * 2;
	});
	return doubledNums;
}

module.exports = doubleAll;