const crypto = require('crypto');

/**
 * Generates a random encryption key and optional initialization vector (IV).
 *
 * @param {number} [keyLength=32] - The length of the encryption key in bytes (default is 32 bytes).
 * @param {number} [ivLength=16] - The length of the initialization vector (IV) in bytes (default is 16 bytes).
 * @param {string} [encoding='hex'] - The encoding for the generated key and IV (default is 'hex').
 * @returns {{
 *   [encoding]: {
 *     key: string,
 *     iv?: string
 *   },
 *   buffer: {
 *     key: Buffer,
 *     iv?: Buffer
 *   },
 *   key: Buffer,
 *   iv?: Buffer
 * }} An object containing the generated encryption key and IV (if IV is requested) in various formats.
*/
module.exports = (keyLength = 32, ivLength = 16, encoding='hex') => {

	const key = crypto.randomBytes(keyLength);
	const iv = crypto.randomBytes(ivLength);

	const result = {
		[encoding]: {
			key: key.toString(encoding),
		},
		buffer: {
			key,
		},
		key,
	};
      
	if (ivLength > 0) {
		result[encoding].iv = iv.toString(encoding);
		result.buffer.iv = iv;
		result.iv = iv;
	}
      
	return result;
};