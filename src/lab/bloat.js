const crypto = require('crypto');
const supported_algos = ['cbc', 'cfb', 'cfb1', 'cfb8', 'ctr', 'ofb'];
const aes = require('../aes');

const prng = require('../utils/prng');

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
	const keylib = require('../utils/keys');
	return keylib(32, 16, encoding);
};

/**
 * Encrypts data using a specified encryption algorithm, key, and initialization vector (IV).
 * @param {string} data - The data to be encrypted.
 * @param {string} key - The encryption key.
 * @param {string} iv - The initialization vector (IV) for encryption.
 * @param {string} [algo='ofb'] - The encryption algorithm to use (default is 'ofb').
 * @param {string} [encoding='hex'] - The encoding format for the encrypted data (default is 'hex').
 * @returns {string} The encrypted data.
 * @throws {Error} If the specified encryption algorithm is not supported.
*/
const encrypt = (data, key, iv, algo='ofb', encoding='hex') => {
	if (!supported_algos.includes(algo)) {
		throw new Error('THe algorithm you supplied is not supported (' + supported_algos.join() + ')');
	}

	const bloated_data = [];

	for (let index = 0; index < (prng.sprng(iv, 15) + 5); index++) {
		bloated_data.push(crypto.randomBytes(prng.prng(100, data.length + 100)).toString(encoding));
	}

	bloated_data[prng.sprng(key+iv, 3)] = data;
	return aes[algo].encrypt(JSON.stringify(bloated_data), key, iv, encoding);
};

/**
 * Decrypts encrypted data using a specified decryption algorithm, key, and initialization vector (IV).
 * @param {string} data - The encrypted data to be decrypted.
 * @param {string} key - The decryption key.
 * @param {string} iv - The initialization vector (IV) used for encryption.
 * @param {string} [algo='ofb'] - The decryption algorithm to use (default is 'ofb').
 * @param {string} [encoding='hex'] - The encoding format of the encrypted data (default is 'hex').
 * @returns {string} The decrypted data.
 * @throws {Error} If the specified decryption algorithm is not supported.
*/
const decrypt = (data, key, iv, algo='ofb', encoding='hex') => {
	if (!supported_algos.includes(algo)) {
		throw new Error('THe algorithm you supplied is not supported (' + supported_algos.join() + ')');
	}

	const bloated_data = JSON.parse(aes[algo].decrypt(data, key, iv, encoding));
	return bloated_data[prng.sprng(key+iv, 3)];
};

module.exports = {genkey, encrypt, decrypt};