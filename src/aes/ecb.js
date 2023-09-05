const crypto = require('crypto');
const keylib = require('../utils/keys');

/**
 * Generates a random key for encryption.
 * @param {string} [encoding='hex'] - The encoding for the generated key (default is 'hex').
 * @returns {{
 *   [encoding]: {
 *     key: string,
 *   },
 *   buffer: {
 *     key: Buffer,
 *   },
 *   key: Buffer,
 * }} An object containing the generated key in various formats.
*/
const genkey = (encoding='hex') => {
	return keylib(32, 0, encoding);
};

/**
 * Encrypts plaintext using AES-256-ECB encryption with the specified key.
 * @param {string} plaintext - The plaintext to be encrypted.
 * @param {Buffer | string} key - The encryption key (either as a Buffer or encoded string).
 * @param {string} [encoding='hex'] - The encoding for the encrypted data (default is 'hex').
 * @returns {string} The encrypted data in the specified encoding.
 * @throws {Error} Throws an error if the encoding types for key are mismatched.
*/
const encrypt = (plaintext, key, encoding='hex') => {
	if (!Buffer.isBuffer(key)) {
		try {
			key = Buffer.from(key, encoding);
		} catch (error) {
			throw new Error('Mismatched encoding types when passing key');
		}
	}

	const cipher = crypto.createCipheriv('aes-256-ecb', key, null);
	let encryptedData = cipher.update(plaintext, 'utf8', encoding);
	encryptedData += cipher.final(encoding);

	return encryptedData;
};

/**
 * Decrypts encrypted data using AES-256-ECB decryption with the specified key.
 * @param {string} encryptedData - The encrypted data to be decrypted.
 * @param {Buffer | string} key - The decryption key (either as a Buffer or encoded string).
 * @param {string} [encoding='hex'] - The encoding for the decrypted data (default is 'hex').
 * @returns {string} The decrypted plaintext.
 * @throws {Error} Throws an error if the encoding types for key are mismatched.
*/
const decrypt = (encryptedData, key, encoding='hex') => {

	if (!Buffer.isBuffer(key)) {
		try {
			key = Buffer.from(key, encoding);
		} catch (error) {
			throw new Error('Mismatched encoding types when passing key');
		}
	}

	const decipher = crypto.createDecipheriv('aes-256-ecb', key, null);
	let decryptedData = decipher.update(encryptedData, encoding, 'utf8');
	decryptedData += decipher.final('utf8');

	return decryptedData;
};

module.exports = {genkey, encrypt, decrypt};