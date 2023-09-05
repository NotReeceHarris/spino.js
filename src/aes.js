module.exports = {
	cbc: require('./aes/cbc'),
	cbc_hmac: require('./aes/cbc-hmac'),
	cfb: require('./aes/cfb'),
	cfb1: require('./aes/cfb1'),
	cfb8: require('./aes/cfb8'),
	ctr: require('./aes/ctr'),
	ecb: require('./aes/ecb'),
	gcm: require('./aes/gcm'),
	ofb: require('./aes/ofb')
};