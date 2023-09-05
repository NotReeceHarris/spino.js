const crypto = require('crypto');
const {isValidPublicKey, isValidPrivateKey, keyConfig} = require('../utils/rsa');

/**
 * Calculates the SHA-512 hash of the given data.
 * @param {string | Buffer} data - The data to be hashed.
 * @param {string} [encoding='hex'] - The encoding for the hash output (default is 'hex').
 * @returns {string} The SHA-512 hash of the input data in the specified encoding.
 */
const sha512 = (data, encoding='hex') => {
	return crypto.createHash('sha512').update(data).digest(encoding);
};

/**
 * Calculates the SHA-512 hash of the given data and performs RSA encryption using provided keys.
 * @param {string | Buffer} data - The data to be hashed.
 * @param {string | Buffer | null} [publickey=null] - The public RSA key for encryption (default is null).
 * @param {string | Buffer | null} [privatekey=null] - The private RSA key for encryption (default is null).
 * @param {string} [encoding='hex'] - The encoding for the hash output (default is 'hex').
 * @returns {{
*   hash: string,
*   publickey: string | Buffer,
*   privatekey: string | Buffer
* }} An object containing the SHA-512 hash of the input data, public key, and private key.
* @throws {Error} Throws an error if either the public key or private key is invalid.
*/
const sha512rsa = (data, publickey=null, privatekey=null, encoding='hex') => {
	if (publickey === null || privatekey === null) {
		const keys = crypto.generateKeyPairSync('rsa', keyConfig);
		publickey = keys.publicKey;
		privatekey = keys.privateKey;
	}

	if (!isValidPublicKey(publickey) || !isValidPrivateKey(privatekey)) {
		throw new Error('Either your public key or private key is invalid');
	}

	return {
		hash: crypto.publicEncrypt({key: publickey},crypto.createHash('sha512').update(data).digest()).toString(encoding),
		publickey,
		privatekey
	};
};

/**
 * Calculates the SHA-512-224 hash of the given data.
 * @param {string | Buffer} data - The data to be hashed.
 * @param {string} [encoding='hex'] - The encoding for the hash output (default is 'hex').
 * @returns {string} The SHA-512-224 hash of the input data in the specified encoding.
*/
const sha512_224 = (data, encoding='hex') => {
	return crypto.createHash('sha512-224').update(data).digest(encoding);
};

/**
 * Calculates the SHA-512-224 hash of the given data and performs RSA encryption using provided keys.
 * @param {string | Buffer} data - The data to be hashed.
 * @param {string | Buffer | null} [publickey=null] - The public RSA key for encryption (default is null).
 * @param {string | Buffer | null} [privatekey=null] - The private RSA key for encryption (default is null).
 * @param {string} [encoding='hex'] - The encoding for the hash output (default is 'hex').
 * @returns {{
 *   hash: string,
 *   publickey: string | Buffer,
 *   privatekey: string | Buffer
 * }} An object containing the SHA-512-224 hash of the input data, public key, and private key.
 * @throws {Error} Throws an error if either the public key or private key is invalid.
*/
const sha512_224rsa = (data, publickey=null, privatekey=null, encoding='hex') => {
	if (publickey === null || privatekey === null) {
		const keys = crypto.generateKeyPairSync('rsa', keyConfig);
		publickey = keys.publicKey;
		privatekey = keys.privateKey;
	}

	if (!isValidPublicKey(publickey) || !isValidPrivateKey(privatekey)) {
		throw new Error('Either your public key or private key is invalid');
	}

	return {
		hash: crypto.publicEncrypt({key: publickey},crypto.createHash('sha512-224').update(data).digest()).toString(encoding),
		publickey,
		privatekey
	};
};

/**
 * Calculates the SHA-512-256 hash of the given data.
 * @param {string | Buffer} data - The data to be hashed.
 * @param {string} [encoding='hex'] - The encoding for the hash output (default is 'hex').
 * @returns {string} The SHA-512-256 hash of the input data in the specified encoding.
*/
const sha512_256 = (data, encoding='hex') => {
	return crypto.createHash('sha512-256').update(data).digest(encoding);
};

/**
 * Calculates the SHA-512-256 hash of the given data and performs RSA encryption using provided keys.
 * @param {string | Buffer} data - The data to be hashed.
 * @param {string | Buffer | null} [publickey=null] - The public RSA key for encryption (default is null).
 * @param {string | Buffer | null} [privatekey=null] - The private RSA key for encryption (default is null).
 * @param {string} [encoding='hex'] - The encoding for the hash output (default is 'hex').
 * @returns {{
 *   hash: string,
 *   publickey: string | Buffer,
 *   privatekey: string | Buffer
 * }} An object containing the SHA-512-256 hash of the input data, public key, and private key.
 * @throws {Error} Throws an error if either the public key or private key is invalid.
*/
const sha512_256rsa = (data, publickey=null, privatekey=null, encoding='hex') => {
	if (publickey === null || privatekey === null) {
		const keys = crypto.generateKeyPairSync('rsa', keyConfig);
		publickey = keys.publicKey;
		privatekey = keys.privateKey;
	}

	if (!isValidPublicKey(publickey) || !isValidPrivateKey(privatekey)) {
		throw new Error('Either your public key or private key is invalid');
	}

	return {
		hash: crypto.publicEncrypt({key: publickey},crypto.createHash('sha512-256').update(data).digest()).toString(encoding),
		publickey,
		privatekey
	};
};

module.exports = {sha512, sha512rsa, sha512_224, sha512_224rsa, sha512_256, sha512_256rsa};