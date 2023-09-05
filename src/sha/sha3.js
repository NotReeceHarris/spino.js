const crypto = require('crypto');

const sha3_224 = (data, encoding='hex') => {
	return crypto.createHash('sha3-224').update(data).digest(encoding);
};

const sha3_256 = (data, encoding='hex') => {
	return crypto.createHash('sha3-256').update(data).digest(encoding);
};

const sha3_384 = (data, encoding='hex') => {
	return crypto.createHash('sha3-384').update(data).digest(encoding);
};

const sha3_512 = (data, encoding='hex') => {
	return crypto.createHash('sha3-512').update(data).digest(encoding);
};

const sha3 = sha3_256;

module.exports = {sha3, sha3_224, sha3_256, sha3_384, sha3_512};