const supported_algos = Object.fromEntries(
	Object.keys({...require('../sha'), ...require('../md5')})
		.filter(key => !key.includes('rsa'))
		.map(key => [key, {...require('../sha'), ...require('../md5')}[key]])
);
const supported_algos_keys = Object.keys(supported_algos);

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