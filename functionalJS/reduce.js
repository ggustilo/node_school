function countWords(inputWords) {
	inputWords.reduce(function(map, current){
		if(map[current]) {
			return map[current] += 1;
		}
		map[current] = 1;
	}, {});
}

module.exports = countWords;

