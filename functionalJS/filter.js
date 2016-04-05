function getShortMessages(messages) {
	
	var justMessages = messages.filter(function(obj){
		if (obj.message.length < 50) {
			return obj.message;
		}
	}).map(function(obj){ return obj.message });

	return justMessages;
}

module.exports = getShortMessages;