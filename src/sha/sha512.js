const crypto = require('crypto');
const {isValidPublicKey, isValidPrivateKey} = require('../utils/rsa');

const sha512 = (data, encoding='hex') => {
	return crypto.createHash('sha512').update(data).digest(encoding);
};

const sha512rsa = (data, publickey=null, privatekey=null, encoding='hex') => {

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
		hash: crypto.publicEncrypt({key: publickey},crypto.createHash('sha512').update(data).digest()).toString(encoding),
		publickey,
		privatekey
	};
};

const sha512_224 = (data, encoding='hex') => {
	return crypto.createHash('sha512-224').update(data).digest(encoding);
};

const sha512_224rsa = (data, publickey=null, privatekey=null, encoding='hex') => {

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
		hash: crypto.publicEncrypt({key: publickey},crypto.createHash('sha512-224').update(data).digest()).toString(encoding),
		publickey,
		privatekey
	};
};

const sha512_256 = (data, encoding='hex') => {
	return crypto.createHash('sha512-256').update(data).digest(encoding);
};

const sha512_256rsa = (data, publickey=null, privatekey=null, encoding='hex') => {

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
		hash: crypto.publicEncrypt({key: publickey},crypto.createHash('sha512-256').update(data).digest()).toString(encoding),
		publickey,
		privatekey
	};
};

module.exports = {sha512, sha512rsa, sha512_224, sha512_224rsa, sha512_256, sha512_256rsa};