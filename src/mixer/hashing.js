const supported_algos = Object.fromEntries(
	Object.keys({...require('../sha'), ...require('../md5')})
		.filter(key => !key.includes('rsa'))
		.map(key => [key, {...require('../sha'), ...require('../md5')}[key]])
);
const supported_algos_keys = Object.keys(supported_algos);

/**
 * Calculate multiple hash values for a given data using specified hashing algorithms.
 * @param {string[]} algos - An array of hashing algorithm names to be used in order.
 * @param {string|Buffer} data - The data to be hashed using the specified algorithms.
 * @param {string|null} [salt=null] - An optional salt to add to the data before hashing (default is null).
 * @param {string} [encoding='hex'] - The encoding format for the final hash result (default is 'hex').
 * @returns {string} The final hash value obtained by applying the specified hashing algorithms sequentially.
 * @throws {Error} If the 'algos' parameter is not an array or contains less than 2 supported hashing algorithm names.
 * @throws {Error} If any of the specified hashing algorithms in 'algos' are not supported.
 * @throws {Error} If 'data' is undefined or null.
*/
module.exports = (algos=[], data, salt=null, encoding='hex') => {

	if (!Array.isArray(algos)) {
		throw new Error('You must pass an array for algos');
	}

	if (algos.length < 2) {
		throw new Error(`You must supply atleast 2 hashing algos. (${supported_algos_keys.join()})`);
	} else {
		algos.forEach((algo) => {
			if (!supported_algos_keys.includes(algo)) {
				throw new Error(`"${algo}" is not a supported hashing algorithm (${supported_algos_keys.join()})`);
			}
		});
	}

	if (data === undefined || data === null) {
		throw new Error('You must supply data to be hashed.');
	}

	algos.forEach((algo) => {
		data = supported_algos[algo](data, salt, encoding);
	});

	return data;

};