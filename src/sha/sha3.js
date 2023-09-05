const crypto = require('crypto');

/**
 * Calculates the SHA-3-224 hash of the given data.
 * @param {string | Buffer} data - The data to be hashed.
 * @param {string} [encoding='hex'] - The encoding for the hash output (default is 'hex').
 * @returns {string} The SHA-3-224 hash of the input data in the specified encoding.
*/
const sha3_224 = (data, encoding = 'hex') => {
	return crypto.createHash('sha3-224').update(data).digest(encoding);
};
  
/**
 * Calculates the SHA-3-256 hash of the given data.
 * @param {string | Buffer} data - The data to be hashed.
 * @param {string} [encoding='hex'] - The encoding for the hash output (default is 'hex').
 * @returns {string} The SHA-3-256 hash of the input data in the specified encoding.
*/
const sha3_256 = (data, encoding = 'hex') => {
	return crypto.createHash('sha3-256').update(data).digest(encoding);
};
  
/**
 * Calculates the SHA-3-384 hash of the given data.
 * @param {string | Buffer} data - The data to be hashed.
 * @param {string} [encoding='hex'] - The encoding for the hash output (default is 'hex').
 * @returns {string} The SHA-3-384 hash of the input data in the specified encoding.
*/
const sha3_384 = (data, encoding = 'hex') => {
	return crypto.createHash('sha3-384').update(data).digest(encoding);
};
  
/**
 * Calculates the SHA-3-512 hash of the given data.
 * @param {string | Buffer} data - The data to be hashed.
 * @param {string} [encoding='hex'] - The encoding for the hash output (default is 'hex').
 * @returns {string} The SHA-3-512 hash of the input data in the specified encoding.
*/
const sha3_512 = (data, encoding = 'hex') => {
	return crypto.createHash('sha3-512').update(data).digest(encoding);
};
  
const sha3 = sha3_256;

module.exports = {sha3, sha3_224, sha3_256, sha3_384, sha3_512};