//Pseudocode:

// iterate through the keys of the tree
//		if a key is 'dependencies'
//			iterate through the dependencies
//			if a key is version
//				grab its parent key
//				add parent plus @ plus child to dependencies array
//				return

function getDependencies(tree, dependencies) {
	var allDependencies = dependencies || [];
	
	Object.keys(tree).forEach(function(key) {
		if (tree[key].hasOwnProperty("version")) {
			var newDependency = key + '@' + tree[key]['version'];
			if (!(allDependencies.indexOf(newDependency) > -1)) {
				allDependencies.push(newDependency);
			}
		}
		if (tree[key].hasOwnProperty("dependencies")) {
			allDependencies.concat(getDependencies(tree[key]['dependencies'], allDependencies));
		}
		if (key === "dependencies") {
			allDependencies.concat(getDependencies(tree[key], allDependencies));
		}
	});
	return allDependencies.sort();
}

module.exports = getDependencies;