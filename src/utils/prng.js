const crypto = require('crypto');

/**
 * Generates a seedable pseudorandom integer using HMAC-based SPRNG (Seeded Pseudorandom Number Generator).
 * @param {string} seed - The seed value for generating random numbers.
 * @param {number} [max=1000] - The maximum value for the generated random number (inclusive).
 * @returns {number} A pseudorandom integer between 0 and 'max'.
*/
const sprng = (seed, max=1000) => {
	const hmac = crypto.createHmac('sha256', seed);
	hmac.update('random-data');
	const randomBytes = Buffer.from(hmac.digest('hex'), 'hex');
	return randomBytes.readUInt32BE(0) % (max + 1);
};

/**
 * Generates a pseudorandom integer within a specified range [min, max].
 *
 * @param {number} min - The minimum value of the desired range (inclusive).
 * @param {number} max - The maximum value of the desired range (inclusive).
 * @returns {number} A pseudorandom integer within the specified range [min, max].
 * @throws {Error} If 'min' is greater than or equal to 'max'.
 * @throws {Error} If the range is too large to be generated pseudorandomly.
*/
const prng = (min, max) => {
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

module.exports = {sprng, prng};