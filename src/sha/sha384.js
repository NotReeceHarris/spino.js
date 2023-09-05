const crypto = require('crypto');
const {isValidPublicKey, isValidPrivateKey} = require('../utils/rsa');

const sha384 = (data, encoding='hex') => {
	return crypto.createHash('sha384').update(data).digest(encoding);
};

const sha384rsa = (data, publickey=null, privatekey=null, encoding='hex') => {

	if (publickey === null || privatekey === null) {
		const keys = crypto.generateKeyPairSync('rsa', {
			modulusLength: 2048,
			publicKeyEncoding: {
				type: 'spki',
				format: 'pem',
			},
			privateKeyEncoding: {
				type: 'pkcs8',
				format: 'pem',
			},
		});
        
		publickey = keys.publicKey;
		privatekey = keys.privateKey;
	}

	if (!isValidPublicKey(publickey) || !isValidPrivateKey(privatekey)) {
		throw new Error('Either your public key or private key is invalid');
	}

	return {
		hash: crypto.publicEncrypt({key: publickey},crypto.createHash('sha384').update(data).digest()).toString(encoding),
		publickey,
		privatekey
	};
};

module.exports = {sha384, sha384rsa};