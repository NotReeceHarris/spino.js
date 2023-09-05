const spinojs = require('./index');
const plaintext = 'Hello, Spino.js';

// AES
(() => {
	const aes = spinojs.aes;
	const aes_keys = aes.cbc.genkey();


	(() => {
		const aes_cbc = aes.cbc;

		// eslint-disable-next-line no-unused-vars
		const aes_cbc_keys = aes_cbc.genkey();
		const aes_cbc_encrypted = aes_cbc.encrypt(plaintext, aes_keys.key, aes_keys.iv);
		const aes_cbc_decrypted = aes_cbc.decrypt(aes_cbc_encrypted, aes_keys.key, aes_keys.iv);

		console.log(`
        ----=====###### AES CBC ######=====----

        key : ${aes_keys.hex.key}
        iv  : ${aes_keys.hex.iv}

        plaintext   : ${plaintext}
        encrypted   : ${aes_cbc_encrypted}
        decrypted   : ${aes_cbc_decrypted}
        `);
	})();

	(() => {
		const aes_cbc_hmac = aes.cbc_hmac;

		// eslint-disable-next-line no-unused-vars
		const aes_cbc_hmac_keys = aes_cbc_hmac.genkey();
		const aes_cbc_hmac_encrypted = aes_cbc_hmac.encrypt(plaintext, aes_keys.key, aes_keys.iv);
		const aes_cbc_hmac_decrypted = aes_cbc_hmac.decrypt(aes_cbc_hmac_encrypted.encrypted, aes_keys.key, aes_keys.iv, aes_cbc_hmac_encrypted.hmacDigest);

		console.log(`
        ----=====###### AES CBC HMAC ######=====----

        key : ${aes_keys.hex.key}
        iv  : ${aes_keys.hex.iv}

        hmac digest : ${aes_cbc_hmac_encrypted.hmacDigest}

        plaintext   : ${plaintext}
        encrypted   : ${aes_cbc_hmac_encrypted.encrypted}
        decrypted   : ${aes_cbc_hmac_decrypted}
        `);
	})();

	(() => {
		const aes_cfb = aes.cfb;

		// eslint-disable-next-line no-unused-vars
		const aes_cfb_keys = aes_cfb.genkey();
		const aes_cfb_encrypted = aes_cfb.encrypt(plaintext, aes_keys.key, aes_keys.iv);
		const aes_cfb_decrypted = aes_cfb.decrypt(aes_cfb_encrypted, aes_keys.key, aes_keys.iv);

		console.log(`
        ----=====###### AES CFB ######=====----

        key : ${aes_keys.hex.key}
        iv  : ${aes_keys.hex.iv}

        plaintext   : ${plaintext}
        encrypted   : ${aes_cfb_encrypted}
        decrypted   : ${aes_cfb_decrypted}
        `);
	})();

	(() => {
		const aes_cfb_one = aes.cfb1;

		// eslint-disable-next-line no-unused-vars
		const aes_cfb_one_keys = aes_cfb_one.genkey();
		const aes_cfb_one_encrypted = aes_cfb_one.encrypt(plaintext, aes_keys.key, aes_keys.iv);
		const aes_cfb_one_decrypted = aes_cfb_one.decrypt(aes_cfb_one_encrypted, aes_keys.key, aes_keys.iv);

		console.log(`
        ----=====###### AES CFB 1 ######=====----

        key : ${aes_keys.hex.key}
        iv  : ${aes_keys.hex.iv}

        plaintext   : ${plaintext}
        encrypted   : ${aes_cfb_one_encrypted}
        decrypted   : ${aes_cfb_one_decrypted}
        `);
	})();

	(() => {
		const aes_cfb_eight = aes.cfb8;

		// eslint-disable-next-line no-unused-vars
		const aes_cfb_eight_keys = aes_cfb_eight.genkey();
		const aes_cfb_eight_encrypted = aes_cfb_eight.encrypt(plaintext, aes_keys.key, aes_keys.iv);
		const aes_cfb_eight_decrypted = aes_cfb_eight.decrypt(aes_cfb_eight_encrypted, aes_keys.key, aes_keys.iv);

		console.log(`
        ----=====###### AES CFB 8 ######=====----

        key : ${aes_keys.hex.key}
        iv  : ${aes_keys.hex.iv}

        plaintext   : ${plaintext}
        encrypted   : ${aes_cfb_eight_encrypted}
        decrypted   : ${aes_cfb_eight_decrypted}
        `);
	})();


	(() => {
		const aes_ctr = aes.ctr;

		// eslint-disable-next-line no-unused-vars
		const aes_ctr_keys = aes_ctr.genkey();
		const aes_ctr_encrypted = aes_ctr.encrypt(plaintext, aes_keys.key, aes_keys.iv);
		const aes_ctr_decrypted = aes_ctr.decrypt(aes_ctr_encrypted, aes_keys.key, aes_keys.iv);

		console.log(`
        ----=====###### AES CTR ######=====----

        key : ${aes_keys.hex.key}
        iv  : ${aes_keys.hex.iv}

        plaintext   : ${plaintext}
        encrypted   : ${aes_ctr_encrypted}
        decrypted   : ${aes_ctr_decrypted} 
        `);
	})();

	(() => {
		const aes_ecb = aes.ecb;

		// eslint-disable-next-line no-unused-vars
		const aes_ecb_keys = aes_ecb.genkey();
		const aes_ecb_encrypted = aes_ecb.encrypt(plaintext, aes_keys.key);
		const aes_ecb_decrypted = aes_ecb.decrypt(aes_ecb_encrypted, aes_keys.key);

		console.log(`
        ----=====###### AES ECB ######=====----

        key : ${aes_keys.hex.key}

        plaintext   : ${plaintext}
        encrypted   : ${aes_ecb_encrypted}
        decrypted   : ${aes_ecb_decrypted}
        `);
	})();

	(() => {
		const lib = aes.gcm;

		const keys = lib.genkey();
		const encrypted = lib.encrypt(plaintext, aes_keys.key, keys.hex.iv);
		const decrypted = lib.decrypt(encrypted.encrypted, aes_keys.key, keys.hex.iv, encrypted.authTag);

		console.log(`
        ----=====###### AES GCM ######=====----

        key : ${aes_keys.hex.key}
        iv  : ${keys.hex.iv}

        authtag :  ${encrypted.authTag}

        plaintext   : ${plaintext}
        encrypted   : ${encrypted.encrypted}
        decrypted   : ${decrypted}
        `);
	})();

	(() => {
		const lib = aes.ofb;

		const keys = lib.genkey();
		const encrypted = lib.encrypt(plaintext, aes_keys.key, aes_keys.iv);
		const decrypted = lib.decrypt(encrypted, aes_keys.key, aes_keys.iv);

		console.log(`
        ----=====###### AES OFB ######=====----

        key : ${aes_keys.hex.key}
        iv  : ${keys.hex.iv}

        plaintext   : ${plaintext}
        encrypted   : ${encrypted}
        decrypted   : ${decrypted}
        `);
	})();
})();

// Blowfish
(() => {

	const bf = spinojs.blowfish;
	const bf_keys = bf.cbc.genkey();

	(() => {
		const algo = bf.cbc;

		// eslint-disable-next-line no-unused-vars
		const keys = algo.genkey();
		const encd = algo.encrypt(plaintext, bf_keys.key, bf_keys.iv);
		const decd = algo.decrypt(encd, bf_keys.key, bf_keys.iv);

		console.log(`
        ----=====###### AES CBC ######=====----

        key : ${bf_keys.hex.key}
        iv  : ${bf_keys.hex.iv}

        plaintext   : ${plaintext}
        encrypted   : ${encd}
        decrypted   : ${decd}
        `);
	})();

});

(() => {
	const sha = spinojs.sha;

	console.log('SHA1:', sha.sha1(plaintext), '\n');
	console.log('SHA1-RSA:', sha.sha1rsa(plaintext).hash, '\n');

	console.log('SHA3:', sha.sha3(plaintext), '\n');
	console.log('SHA3-224:', sha.sha3_224(plaintext), '\n');
	console.log('SHA3-256:', sha.sha3_256(plaintext), '\n');
	console.log('SHA3-384:', sha.sha3_384(plaintext), '\n');
	console.log('SHA3-512:', sha.sha3_512(plaintext), '\n');

	console.log('SHA224:', sha.sha224(plaintext), '\n');
	console.log('SHA224-RSA:', sha.sha224rsa(plaintext).hash, '\n');

	console.log('SHA256:', sha.sha224(plaintext), '\n');
	console.log('SHA256-RSA:', sha.sha256rsa(plaintext).hash, '\n');

	console.log('SHA384:', sha.sha384(plaintext), '\n');
	console.log('SHA384-RSA:', sha.sha384rsa(plaintext).hash, '\n');

	console.log('SHA512:', sha.sha512(plaintext), '\n');
	console.log('SHA512-RSA:', sha.sha512rsa(plaintext).hash, '\n');
	console.log('SHA512-224:', sha.sha512_224(plaintext), '\n');
	console.log('SHA512-224-RSA:', sha.sha512_224rsa(plaintext).hash, '\n');
	console.log('SHA512-256:', sha.sha512_256(plaintext), '\n');
	console.log('SHA512-256-RSA:', sha.sha512_256rsa(plaintext).hash, '\n');

});

// eslint-disable-next-line no-unused-vars
const hashes = [
	'RSA-MD5',
	'RSA-RIPEMD160',
	'RSA-SHA1',
	'RSA-SHA1-2',
	'RSA-SHA224',
	'RSA-SHA256',
	'RSA-SHA3-224',
	'RSA-SHA3-256',
	'RSA-SHA3-384',
	'RSA-SHA3-512',
	'RSA-SHA384',
	'RSA-SHA512',
	'RSA-SHA512/224',
	'RSA-SHA512/256',
	'RSA-SM3',
	'blake2b512',
	'blake2s256',
	'id-rsassa-pkcs1-v1_5-with-sha3-224',
	'id-rsassa-pkcs1-v1_5-with-sha3-256',
	'id-rsassa-pkcs1-v1_5-with-sha3-384',
	'id-rsassa-pkcs1-v1_5-with-sha3-512',
	'md5',
	'md5-sha1',
	'md5WithRSAEncryption',
	'ripemd',
	'ripemd160',
	'ripemd160WithRSA',
	'rmd160',
	'shake128',
	'shake256',
	'sm3',
	'sm3WithRSAEncryption',
	'ssl3-md5',
	'ssl3-sha1'
];

// eslint-disable-next-line no-unused-vars
const algos = [ 
	'CAST-cbc',
	'aes128',
	'aes192',
	'aes256',
	'bf',
	'bf-cbc',
	'bf-cfb',
	'bf-ecb',
	'bf-ofb',
	'blowfish',
	'camellia-128-cbc',
	'camellia-128-cfb',
	'camellia-128-cfb1',
	'camellia-128-cfb8',
	'camellia-128-ecb',
	'camellia-128-ofb',
	'camellia-192-cbc',
	'camellia-192-cfb',
	'camellia-192-cfb1',
	'camellia-192-cfb8',
	'camellia-192-ecb',
	'camellia-192-ofb',
	'camellia-256-cbc',
	'camellia-256-cfb',
	'camellia-256-cfb1',
	'camellia-256-cfb8',
	'camellia-256-ecb',
	'camellia-256-ofb',
	'camellia128',
	'camellia192',
	'camellia256',
	'cast',
	'cast-cbc',
	'cast5-cbc',
	'cast5-cfb',
	'cast5-ecb',
	'cast5-ofb',
	'des',
	'des-cbc',
	'des-cfb',
	'des-cfb1',
	'des-cfb8',
	'des-ecb',
	'des-ede',
	'des-ede-cbc',
	'des-ede-cfb',
	'des-ede-ofb',
	'des-ede3',
	'des-ede3-cbc',
	'des-ede3-cfb',
	'des-ede3-cfb1',
	'des-ede3-cfb8',
	'des-ede3-ofb',
	'des-ofb',
	'des3',
	'desx',
	'desx-cbc',
	'id-aes128-GCM',
	'id-aes192-GCM',
	'id-aes256-GCM',
	'idea',
	'idea-cbc',
	'idea-cfb',
	'idea-ecb',
	'idea-ofb',
	'rc2',
	'rc2-40-cbc',
	'rc2-64-cbc',
	'rc2-cbc',
	'rc2-cfb',
	'rc2-ecb',
	'rc2-ofb',
	'rc4',
	'rc4-40',
	'rc4-hmac-md5',
	'seed',
	'seed-cbc',
	'seed-cfb',
	'seed-ecb',
	'seed-ofb' 
];