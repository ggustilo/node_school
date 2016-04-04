function upperCaser(input) {
	if ( typeof input === 'string' ) {
		return input.toUpperCase();
	}

	return String(input).toUpperCase();
}

module.exports = upperCaser;


