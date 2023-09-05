const crypto = require('crypto');

const genkey = (encoding='hex') => {

	const key = crypto.randomBytes(32);
	const iv = crypto.randomBytes(12);

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

	const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
	let encryptedData = cipher.update(plaintext, 'utf8', encoding);
	encryptedData += cipher.final(encoding);

	return {
		encrypted: encryptedData,
		authTag: cipher.getAuthTag().toString(encoding)
	};
};

const decrypt = (encryptedData, key, iv, authTag, encoding='hex') => {

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

	if (!Buffer.isBuffer(authTag)) {
		try {
			authTag = Buffer.from(authTag, encoding);
		} catch (error) {
			throw new Error('Mismatched encoding types when passing authTag');
		}
	}

	const decipher = crypto.createDecipheriv('aes-256-gcm', key, iv);
	decipher.setAuthTag(Buffer.from(authTag, encoding));
	let decryptedData = decipher.update(encryptedData, encoding, 'utf8');
	decryptedData += decipher.final('utf8');

	return decryptedData;
};

module.exports = {genkey, encrypt, decrypt};