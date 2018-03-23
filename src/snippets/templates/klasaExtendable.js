const { Extendable } = require('klasa');

module.exports = class extends Extendable {

	constructor(...args) {
		super(...args, {
			enabled: $1,
			appliesTo: [$2],
			klasa: $3
		});
	}

	$4extend() {
		// `this` refers to the parent class, and not this one. You cannot use super.
		$0;
	}

};
