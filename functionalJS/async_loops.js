function loadUsers(userIds, load, done) {
	var completed = 0;
	var users = [];
	userIds.forEach(function(id, index){
		load(id, function(user) {
			users[index] = user;
			completed++;
			if (completed === userIds.length) return done(users);
		});
	});
}

module.exports = loadUsers;