/*
	Cryptian is only loaded/required when its needed to speed up load time for spino.js libary
*/

const genkey = (encoding='hex', size=56) => {
	const keylib = require('../utils/keys');
	return keylib(size, 8, encoding);
};

const encrypt = (plaintext, key, iv, encoding='hex') => {

	const {default: {algorithm, mode}} = require('cryptian');

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

	const bf = new algorithm.Blowfish();
	bf.setKey(key);

	const cipher = new mode.cbc.Cipher(bf, iv);

	console.log(cipher.transform.apply(8));

	return cipher.getBlockSize();
};

const decrypt = (encryptedData, key, encoding='hex') => {

	const {default: {algorithm}} = require('cryptian');

	if (!Buffer.isBuffer(key)) {
		try {
			key = Buffer.from(key, encoding);
		} catch (error) {
			throw new Error('Mismatched encoding types when passing key');
		}
	}

	const blowfish = new algorithm.Blowfish();

	blowfish.setKey(key);
	return blowfish.decrypt(Buffer.from(encryptedData, encoding));
};

module.exports = {genkey, encrypt, decrypt};