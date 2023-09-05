const crypto = require('crypto');

const genkey = (encoding='hex') => {

	const key = crypto.randomBytes(32);
	const iv = crypto.randomBytes(16);

	return {
		[encoding]: {
			key: key.toString(encoding),
			iv: iv.toString(encoding)
		},
		buffer: {
			key,
			iv
		},
		key,
		iv
	};
};

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
	const hmacDigest = hmac.digest('hex');

	return {
		encrypted: encryptedData,
		hmacDigest
	};
};

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
	const computedHmacDigest = hmacVerification.digest('hex');

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