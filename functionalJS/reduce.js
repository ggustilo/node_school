function countWords(inputWords) {
	var numTimes = {};
	inputWords.reduce(function(previous, current){
		if(numTimes[current]) {
			return numTimes[current] += 1;
		}
		numTimes[current] = 1;
	}, {});
	return numTimes;
}

module.exports = countWords;

