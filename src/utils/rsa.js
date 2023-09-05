const crypto = require('crypto');

/**
 * Checks if a given private key is a valid RSA private key.
 * @param {string | Buffer} privateKey - The private key to validate.
 * @returns {boolean} True if the private key is valid for RSA encryption, false otherwise.
 */
const isValidPrivateKey = (privateKey) => {
	try {
		const key = crypto.createPrivateKey(privateKey);
		return key instanceof crypto.KeyObject && key.asymmetricKeyType === 'rsa';
	} catch (error) {
		return false;
	}
};

/**
 * Checks if a given public key is a valid RSA public key.
 * @param {string | Buffer} publicKey - The public key to validate.
 * @returns {boolean} True if the public key is valid for RSA encryption, false otherwise.
 */
const isValidPublicKey = (publicKey) => {
	try {
		const key = crypto.createPublicKey(publicKey);
		return key instanceof crypto.KeyObject && key.asymmetricKeyType === 'rsa';
	} catch (error) {
		return false;
	}
};

const keyConfig = {
	modulusLength: 2048,
	publicKeyEncoding: {
		type: 'spki',
		format: 'pem',
	},
	privateKeyEncoding: {
		type: 'pkcs8',
		format: 'pem',
	},
};

module.exports = {isValidPublicKey, isValidPrivateKey, keyConfig};