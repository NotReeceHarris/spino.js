const crypto = require('crypto');
const mix = require('../utils/saltmix');

/**
 * Calculates the SHA-3-224 hash of the given data.
 * @param {string | Buffer} data - The data to be hashed.
 * @param {string} salt - The salt that is used in the hash.
 * @param {string} [encoding='hex'] - The encoding for the hash output (default is 'hex').
 * @returns {string} The SHA-3-224 hash of the input data in the specified encoding.
*/
const sha3_224 = (data, salt=null, encoding = 'hex') => {
	if (Buffer.isBuffer(data)) data.toString(encoding);
	return crypto.createHash('sha3-224').update(mix(data, salt)).digest().toString(encoding);
};
  
/**
 * Calculates the SHA-3-256 hash of the given data.
 * @param {string | Buffer} data - The data to be hashed.
 * @param {string} salt - The salt that is used in the hash.
 * @param {string} [encoding='hex'] - The encoding for the hash output (default is 'hex').
 * @returns {string} The SHA-3-256 hash of the input data in the specified encoding.
*/
const sha3_256 = (data, salt=null, encoding = 'hex') => {
	if (Buffer.isBuffer(data)) data.toString(encoding);
	return crypto.createHash('sha3-256').update(mix(data, salt)).digest().toString(encoding);
};
  
/**
 * Calculates the SHA-3-384 hash of the given data.
 * @param {string | Buffer} data - The data to be hashed.
 * @param {string} salt - The salt that is used in the hash.
 * @param {string} [encoding='hex'] - The encoding for the hash output (default is 'hex').
 * @returns {string} The SHA-3-384 hash of the input data in the specified encoding.
*/
const sha3_384 = (data, salt=null, encoding = 'hex') => {
	if (Buffer.isBuffer(data)) data.toString(encoding);
	return crypto.createHash('sha3-384').update(mix(data, salt)).digest().toString(encoding);
};
  
/**
 * Calculates the SHA-3-512 hash of the given data.
 * @param {string | Buffer} data - The data to be hashed.
 * @param {string} salt - The salt that is used in the hash.
 * @param {string} [encoding='hex'] - The encoding for the hash output (default is 'hex').
 * @returns {string} The SHA-3-512 hash of the input data in the specified encoding.
*/
const sha3_512 = (data, salt=null, encoding = 'hex') => {
	if (Buffer.isBuffer(data)) data.toString(encoding);
	return crypto.createHash('sha3-512').update(mix(data, salt)).digest().toString(encoding);
};
  
const sha3 = sha3_256;

module.exports = {sha3, sha3_224, sha3_256, sha3_384, sha3_512};