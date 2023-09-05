const crypto = require('crypto');

module.exports = (min, max) => {
	if (min >= max) {
		throw new Error('Invalid range: min must be less than max');
	}

	const range = max - min + 1;
	const bytesNeeded = Math.ceil(Math.log2(range) / 8);

	if (bytesNeeded > 6) {
		throw new Error('Invalid range: too large');
	}

	const maxValidValue = 256 ** bytesNeeded - 1;
	const buffer = Buffer.allocUnsafe(bytesNeeded);
	let randomValue;

	do {
		crypto.randomFillSync(buffer);
		randomValue = buffer.readUIntBE(0, bytesNeeded);
	} while (randomValue > maxValidValue - (maxValidValue % range));

	return min + (randomValue % range);
};