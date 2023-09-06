const {sprng} = require('./prng');

/**
 * Combines two strings by interleaving their characters with seeded random data, using salt.
 *
 * If 'salt' is provided, it interweaves the characters of 'data' and 'salt' strings with seeded random data.
 * If 'salt' is null or undefined, it returns the original 'data' string.
 * 
 * This is a creative way of securing a hash, as its unkown what libary hashed a password unless 
 * the code is leaked. this salt algorithm will make it impossable to dictionary/bruteforce attack
 *
 * @param {string} pepper - The main string to be combined with 'salt' and random data.
 * @param {string|null|undefined} salt - The salt string to interleave with 'data' (optional).
 * @returns {string} The combined string with interleaved characters and random data.
 */
module.exports = (pepper, salt) => {
	if (salt === null | salt === undefined) {
		return pepper;
	}

	const dataArray = pepper.split('');
	const saltArray = salt.split('');
	const dataArrayRng = sprng(dataArray.join(''), 9e20).toString().split('');
	const saltArrayRng = sprng(saltArray.join(''), 9e20).toString().split('');

	const result = [];
	const maxLength = Math.max(dataArray.length, saltArray.length, dataArrayRng.length, saltArrayRng.length);

	for (let i = 0; i < maxLength; i++) {
		if (i < dataArray.length) {
			result.push(dataArray[i]);
		}
		if (i < saltArray.length) {
			result.push(saltArray[i]);
		}
		if (i < dataArrayRng.length) {
			result.push(dataArrayRng[i]);
		}
		if (i < saltArrayRng.length) {
			result.push(saltArrayRng[i]);
		}
	}

	return result.join('');
};