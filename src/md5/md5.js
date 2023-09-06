const crypto = require('crypto');
const mix = require('../utils/saltmix');

/**
 * Computes an MD5 hash of data with optional salt and encoding.
 *
 * @param {string|Buffer} data - The input data to be hashed.
 * @param {string|null} [salt=null] - An optional salt value to mix with the data before hashing.
 * @param {string} [encoding='hex'] - The encoding format for the final hash (e.g., 'hex', 'base64').
 * @returns {string} The MD5 hash of the input data with optional salt.
*/
const md5 = (data, salt=null, encoding='hex') => {
	if (Buffer.isBuffer(data)) data.toString(encoding);
	return crypto.createHash('md5').update(mix(data, salt)).digest().toString(encoding);
};

/**
 * Calculates the MD5 and SHA-1 hashes of a given string with optional salt.
 * @param {string|Buffer} data - The data for which to calculate the MD5 and SHA-1 hashes.
 * @param {string|null} [salt=null] - An optional salt to add to the data before hashing (default is null).
 * @param {string} [encoding='hex'] - The encoding format for the hash result (default is 'hex').
 * @returns {string} The concatenated MD5 and SHA-1 hashes of the input data with optional salt.
 */
const md5sha1 = (data, salt=null, encoding='hex') => {
	if (Buffer.isBuffer(data)) data.toString(encoding);
	const md5 = crypto.createHash('md5').update(mix(data, salt)).digest().toString(encoding);
	return crypto.createHash('sha1').update(md5).digest().toString(encoding);
};

module.exports = {md5, md5sha1};