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
	console.log(tree);
	
	Object.keys(tree).forEach(function(key) {
		console.log(key);
		if (tree[key].hasOwnProperty("version")) {
			console.log("Got version");
			allDependencies.push(key + '@' + tree[key]['version']);
		}
		if (tree[key].hasOwnProperty("dependencies")) {
			console.log("Got sub dependencies");
			allDependencies.concat(getDependencies(tree[key]['dependencies'], allDependencies));
		}
		if (key === "dependencies") {
			console.log("Got dependencies");
			allDependencies.concat(getDependencies(tree[key], allDependencies));
		}
	});
	console.log(allDependencies);
	return allDependencies.sort();
}

module.exports = getDependencies;