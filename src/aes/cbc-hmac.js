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
 * Encrypts plaintext using the specified key and IV.
 * @param {string} plaintext - The plaintext to be encrypted.
 * @param {Buffer | string} key - The encryption key (either as a Buffer or encoded string).
 * @param {Buffer | string} iv - The initialization vector (IV) (either as a Buffer or encoded string).
 * @param {string} [encoding='hex'] - The encoding for the encrypted data and HMAC digest (default is 'hex').
 * @returns {{
 *   encrypted: string,
 *   hmacDigest: string
 * }} An object containing the encrypted data and HMAC digest.
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

	const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
	let encryptedData = cipher.update(plaintext, 'utf8', encoding);
	encryptedData += cipher.final(encoding);

	const hmac = crypto.createHmac('sha1', key);
	hmac.update(encryptedData);
	const hmacDigest = hmac.digest().toString(encoding);

	return {
		encrypted: encryptedData,
		hmacDigest
	};
};

/**
 * Decrypts encrypted data using the specified key and IV and verifies the HMAC digest.
 * @param {string} encryptedData - The encrypted data to be decrypted.
 * @param {Buffer | string} key - The decryption key (either as a Buffer or encoded string).
 * @param {Buffer | string} iv - The initialization vector (IV) (either as a Buffer or encoded string).
 * @param {string} hmacDigest - The HMAC digest to be verified.
 * @param {string} [encoding='hex'] - The encoding for the encrypted data and HMAC digest (default is 'hex').
 * @returns {string | false} The decrypted plaintext if HMAC verification succeeds, or false if verification fails.
 * @throws {Error} Throws an error if the encoding types for key or IV are mismatched.
*/
const decrypt = (encryptedData, key, iv, hmacDigest, encoding='hex') => {

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

	const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);

	const hmacVerification = crypto.createHmac('sha1', key);
	hmacVerification.update(encryptedData);
	const computedHmacDigest = hmacVerification.digest().toString(encoding);

	if (computedHmacDigest !== hmacDigest) {
		console.error('HMAC verification failed. The data may have been tampered with.');
		return false;
	} else {
		let decryptedData = decipher.update(encryptedData, encoding, 'utf8');
		decryptedData += decipher.final('utf8');

		return decryptedData;
	}
};

module.exports = {genkey, encrypt, decrypt};