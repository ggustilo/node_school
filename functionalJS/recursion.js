//Pseudocode:

// iterate through the current object
//		if the current object has a property called dependencies
//			call the method again
//		else
//			iterate through it and add each element plus @ plus element["version"] to an array
//		end
// return that array

function getDependencies(tree, dependencies) {
	var allDependencies = dependencies || [];
	console.log(tree);
	var forEach = Array.prototype.forEach;

	forEach.call(tree, function(property){
		allDependencies.push(property + "@");
		if (property === "dependencies") {
			getDependencies(property, allDependencies);
		}
	});

	return allDependencies;
}

module.exports = getDependencies;