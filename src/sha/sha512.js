const crypto = require('crypto');
const {isValidPublicKey, isValidPrivateKey, keyConfig} = require('../utils/rsa');
const mix = require('../utils/saltmix');

/**
 * Calculates the SHA-512 hash of the given data.
 * @param {string | Buffer} data - The data to be hashed.
 * @param {string} salt - The salt that is used in the hash.
 * @param {string} [encoding='hex'] - The encoding for the hash output (default is 'hex').
 * @returns {string} The SHA-512 hash of the input data in the specified encoding.
 */
const sha512 = (data, salt=null, encoding='hex') => {
	if (Buffer.isBuffer(data)) data.toString(encoding);
	return crypto.createHash('sha512').update(mix(data, salt)).digest(encoding);
};

/**
 * Calculates the SHA-512-256 hash of the given data.
 * @param {string | Buffer} data - The data to be hashed.
 * @param {string} salt - The salt that is used in the hash.
 * @param {string} [encoding='hex'] - The encoding for the hash output (default is 'hex').
 * @returns {string} The SHA-512-256 hash of the input data in the specified encoding.
*/
const sha512_256 = (data, salt=null, encoding='hex') => {
	if (Buffer.isBuffer(data)) data.toString(encoding);
	return crypto.createHash('sha512-256').update(mix(data, salt)).digest(encoding);
};

/**
 * Calculates the SHA-512-224 hash of the given data.
 * @param {string | Buffer} data - The data to be hashed.
 * @param {string} salt - The salt that is used in the hash.
 * @param {string} [encoding='hex'] - The encoding for the hash output (default is 'hex').
 * @returns {string} The SHA-512-224 hash of the input data in the specified encoding.
*/
const sha512_224 = (data, salt=null, encoding='hex') => {
	if (Buffer.isBuffer(data)) data.toString(encoding);
	return crypto.createHash('sha512-224').update(mix(data, salt)).digest(encoding);
};

/**
 * Calculates the SHA-512 hash of the given data and performs RSA encryption using provided keys.
 * @param {string | Buffer} data - The data to be hashed.
 * @param {string | Buffer | null} [publickey=null] - The public RSA key for encryption (default is null).
 * @param {string | Buffer | null} [privatekey=null] - The private RSA key for encryption (default is null).
 * @param {string} salt - The salt that is used in the hash.
 * @param {string} [encoding='hex'] - The encoding for the hash output (default is 'hex').
 * @returns {{
*   hash: string,
*   publickey: string | Buffer,
*   privatekey: string | Buffer
* }} An object containing the SHA-512 hash of the input data, public key, and private key.
* @throws {Error} Throws an error if either the public key or private key is invalid.
*/
const sha512rsa = (data, publickey=null, privatekey=null, salt=null, encoding='hex') => {
	if (publickey === null || privatekey === null) {
		const keys = crypto.generateKeyPairSync('rsa', keyConfig);
		publickey = keys.publicKey;
		privatekey = keys.privateKey;
	}

	if (!isValidPublicKey(publickey) || !isValidPrivateKey(privatekey)) {
		throw new Error('Either your public key or private key is invalid');
	}

	return {
		hash: crypto.publicEncrypt({key: publickey},sha512(data, salt, encoding)).toString(encoding),
		publickey,
		privatekey
	};
};

/**
 * Calculates the SHA-512-224 hash of the given data and performs RSA encryption using provided keys.
 * @param {string | Buffer} data - The data to be hashed.
 * @param {string | Buffer | null} [publickey=null] - The public RSA key for encryption (default is null).
 * @param {string | Buffer | null} [privatekey=null] - The private RSA key for encryption (default is null).
 * @param {string} salt - The salt that is used in the hash.
 * @param {string} [encoding='hex'] - The encoding for the hash output (default is 'hex').
 * @returns {{
 *   hash: string,
 *   publickey: string | Buffer,
 *   privatekey: string | Buffer
 * }} An object containing the SHA-512-224 hash of the input data, public key, and private key.
 * @throws {Error} Throws an error if either the public key or private key is invalid.
*/
const sha512_224rsa = (data, publickey=null, privatekey=null, salt=null, encoding='hex') => {
	if (publickey === null || privatekey === null) {
		const keys = crypto.generateKeyPairSync('rsa', keyConfig);
		publickey = keys.publicKey;
		privatekey = keys.privateKey;
	}

	if (!isValidPublicKey(publickey) || !isValidPrivateKey(privatekey)) {
		throw new Error('Either your public key or private key is invalid');
	}

	return {
		hash: crypto.publicEncrypt({key: publickey},sha512_224(data, salt, encoding)).toString(encoding),
		publickey,
		privatekey
	};
};

/**
 * Calculates the SHA-512-256 hash of the given data and performs RSA encryption using provided keys.
 * @param {string | Buffer} data - The data to be hashed.
 * @param {string | Buffer | null} [publickey=null] - The public RSA key for encryption (default is null).
 * @param {string | Buffer | null} [privatekey=null] - The private RSA key for encryption (default is null).
 * @param {string} salt - The salt that is used in the hash.
 * @param {string} [encoding='hex'] - The encoding for the hash output (default is 'hex').
 * @returns {{
 *   hash: string,
 *   publickey: string | Buffer,
 *   privatekey: string | Buffer
 * }} An object containing the SHA-512-256 hash of the input data, public key, and private key.
 * @throws {Error} Throws an error if either the public key or private key is invalid.
*/
const sha512_256rsa = (data, publickey=null, privatekey=null, salt=null, encoding='hex') => {
	if (publickey === null || privatekey === null) {
		const keys = crypto.generateKeyPairSync('rsa', keyConfig);
		publickey = keys.publicKey;
		privatekey = keys.privateKey;
	}

	if (!isValidPublicKey(publickey) || !isValidPrivateKey(privatekey)) {
		throw new Error('Either your public key or private key is invalid');
	}

	return {
		hash: crypto.publicEncrypt({key: publickey},sha512_256(data, salt, encoding)).toString(encoding),
		publickey,
		privatekey
	};
};

module.exports = {sha512, sha512rsa, sha512_224, sha512_224rsa, sha512_256, sha512_256rsa};