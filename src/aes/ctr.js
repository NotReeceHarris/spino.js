const crypto = require('crypto');
const keylib = require('../utils/keys');

/**
 * Generates a random key and initialization vector (IV) for encryption.
 * @param {string} [encoding='hex'] - The encoding for the generated key and IV (default is 'hex').
 * @returns {{
 *   [encoding]: {
 *     key: string,
 *     iv: string
 *   },
 *   buffer: {
 *     key: Buffer,
 *     iv: Buffer
 *   },
 *   key: Buffer,
 *   iv: Buffer
 * }} An object containing the generated key and IV in various formats.
*/
const genkey = (encoding='hex') => {
	return keylib(32, 16, encoding);
};

/**
 * Encrypts plaintext using AES-256-CTR encryption with the specified key and IV.
 * @param {string} plaintext - The plaintext to be encrypted.
 * @param {Buffer | string} key - The encryption key (either as a Buffer or encoded string).
 * @param {Buffer | string} iv - The initialization vector (IV) (either as a Buffer or encoded string).
 * @param {string} [encoding='hex'] - The encoding for the encrypted data (default is 'hex').
 * @returns {string} The encrypted data in the specified encoding.
 * @throws {Error} Throws an error if the encoding types for key or IV are mismatched.
*/
const encrypt = (plaintext, key, iv, encoding='hex') => {
	if (!Buffer.isBuffer(key)) {
		try {
			key = Buffer.from(key, encoding);
		} catch (error) {
			throw new Error('Mismatched encoding types when passing key');
		}
	}

	if (!Buffer.isBuffer(iv)) {
		try {
			iv = Buffer.from(iv, encoding);
		} catch (error) {
			throw new Error('Mismatched encoding types when passing iv');
		}
	}

	const cipher = crypto.createCipheriv('aes-256-ctr', key, iv);
	let encryptedData = cipher.update(plaintext, 'utf8', encoding);
	encryptedData += cipher.final(encoding);

	return encryptedData;
};

/**
 * Decrypts encrypted data using AES-256-CTR decryption with the specified key and IV.
 * @param {string} encryptedData - The encrypted data to be decrypted.
 * @param {Buffer | string} key - The decryption key (either as a Buffer or encoded string).
 * @param {Buffer | string} iv - The initialization vector (IV) (either as a Buffer or encoded string).
 * @param {string} [encoding='hex'] - The encoding for the decrypted data (default is 'hex').
 * @returns {string} The decrypted plaintext.
 * @throws {Error} Throws an error if the encoding types for key or IV are mismatched.
*/
const decrypt = (encryptedData, key, iv, encoding='hex') => {

	if (!Buffer.isBuffer(key)) {
		try {
			key = Buffer.from(key, encoding);
		} catch (error) {
			throw new Error('Mismatched encoding types when passing key');
		}
	}

	if (!Buffer.isBuffer(iv)) {
		try {
			iv = Buffer.from(iv, encoding);
		} catch (error) {
			throw new Error('Mismatched encoding types when passing iv');
		}
	}

	const decipher = crypto.createDecipheriv('aes-256-ctr', key, iv);
	let decryptedData = decipher.update(encryptedData, encoding, 'utf8');
	decryptedData += decipher.final('utf8');

	return decryptedData;
};

module.exports = {genkey, encrypt, decrypt};