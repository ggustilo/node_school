// var testAllValid = checkUsersValid(goodUsers);
// testAllValid = allUsersValid();
// testAllValid(submittedUsers) = allUsersValid(submittedUsers);

// INPUTS: arrays of objects;
// 


function checkUsersValid(goodUsers) {
	return function allUsersValid(submittedUsers){
		return submittedUsers.every(function(submittedUser){
			return goodUsers.some(function(goodUser){
				return goodUser.id == submittedUser.id;
			});
		});
	};
}

module.exports = checkUsersValid;