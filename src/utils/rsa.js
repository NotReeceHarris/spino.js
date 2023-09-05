const crypto = require('crypto');

const isValidPrivateKey = (privateKey) => {
	try {
		const key = crypto.createPrivateKey(privateKey);
		return key instanceof crypto.KeyObject && key.asymmetricKeyType === 'rsa';
	} catch (error) {
		return false;
	}
};

const isValidPublicKey = (publicKey) => {
	try {
		const key = crypto.createPublicKey(publicKey);
		return key instanceof crypto.KeyObject && key.asymmetricKeyType === 'rsa';
	} catch (error) {
		return false;
	}
};

module.exports = {isValidPublicKey, isValidPrivateKey};