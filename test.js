const spinojs = require('./index');
const plaintext = "Hello, Spino.js";

// AES
(() => {
    const aes = spinojs.aes;
    const aes_keys = aes.cbc.genkey();


    (() => {
        aes_cbc = aes.cbc

        aes_cbc_keys = aes_cbc.genkey()
        aes_cbc_encrypted = aes_cbc.encrypt(plaintext, aes_keys.key, aes_keys.iv)
        aes_cbc_decrypted = aes_cbc.decrypt(aes_cbc_encrypted, aes_keys.key, aes_keys.iv)

        console.log(`
        ----=====###### AES CBC ######=====----

        key : ${aes_keys.hex.key}
        iv  : ${aes_keys.hex.iv}

        plaintext   : ${plaintext}
        encrypted   : ${aes_cbc_encrypted}
        decrypted   : ${aes_cbc_decrypted}
        `)
    })();

    (() => {
        aes_cbc_hmac = aes.cbc_hmac

        aes_cbc_hmac_keys = aes_cbc_hmac.genkey()
        aes_cbc_hmac_encrypted = aes_cbc_hmac.encrypt(plaintext, aes_keys.key, aes_keys.iv)
        aes_cbc_hmac_decrypted = aes_cbc_hmac.decrypt(aes_cbc_hmac_encrypted.encrypted, aes_keys.key, aes_keys.iv, aes_cbc_hmac_encrypted.hmacDigest)

        console.log(`
        ----=====###### AES CBC HMAC ######=====----

        key : ${aes_keys.hex.key}
        iv  : ${aes_keys.hex.iv}

        hmac digest : ${aes_cbc_hmac_encrypted.hmacDigest}

        plaintext   : ${plaintext}
        encrypted   : ${aes_cbc_hmac_encrypted.encrypted}
        decrypted   : ${aes_cbc_hmac_decrypted}
        `)
    })();

    (() => {
        aes_cfb = aes.cfb

        aes_cfb_keys = aes_cfb.genkey()
        aes_cfb_encrypted = aes_cfb.encrypt(plaintext, aes_keys.key, aes_keys.iv)
        aes_cfb_decrypted = aes_cfb.decrypt(aes_cfb_encrypted, aes_keys.key, aes_keys.iv)

        console.log(`
        ----=====###### AES CFB ######=====----

        key : ${aes_keys.hex.key}
        iv  : ${aes_keys.hex.iv}

        plaintext   : ${plaintext}
        encrypted   : ${aes_cfb_encrypted}
        decrypted   : ${aes_cfb_decrypted}
        `)
    })();

    (() => {
        aes_cfb_one = aes.cfb1

        aes_cfb_one_keys = aes_cfb_one.genkey()
        aes_cfb_one_encrypted = aes_cfb_one.encrypt(plaintext, aes_keys.key, aes_keys.iv)
        aes_cfb_one_decrypted = aes_cfb_one.decrypt(aes_cfb_one_encrypted, aes_keys.key, aes_keys.iv)

        console.log(`
        ----=====###### AES CFB 1 ######=====----

        key : ${aes_keys.hex.key}
        iv  : ${aes_keys.hex.iv}

        plaintext   : ${plaintext}
        encrypted   : ${aes_cfb_one_encrypted}
        decrypted   : ${aes_cfb_one_decrypted}
        `)
    })();

    (() => {
        aes_cfb_eight = aes.cfb8

        aes_cfb_eight_keys = aes_cfb_eight.genkey()
        aes_cfb_eight_encrypted = aes_cfb_eight.encrypt(plaintext, aes_keys.key, aes_keys.iv)
        aes_cfb_eight_decrypted = aes_cfb_eight.decrypt(aes_cfb_eight_encrypted, aes_keys.key, aes_keys.iv)

        console.log(`
        ----=====###### AES CFB 8 ######=====----

        key : ${aes_keys.hex.key}
        iv  : ${aes_keys.hex.iv}

        plaintext   : ${plaintext}
        encrypted   : ${aes_cfb_eight_encrypted}
        decrypted   : ${aes_cfb_eight_decrypted}
        `)
    })();


    (() => {
        aes_ctr = aes.ctr

        aes_ctr_keys = aes_ctr.genkey()
        aes_ctr_encrypted = aes_ctr.encrypt(plaintext, aes_keys.key, aes_keys.iv)
        aes_ctr_decrypted = aes_ctr.decrypt(aes_ctr_encrypted, aes_keys.key, aes_keys.iv)

        console.log(`
        ----=====###### AES CTR ######=====----

        key : ${aes_keys.hex.key}
        iv  : ${aes_keys.hex.iv}

        plaintext   : ${plaintext}
        encrypted   : ${aes_ctr_encrypted}
        decrypted   : ${aes_ctr_decrypted} 
        `)
    })();

    (() => {
        aes_ecb = aes.ecb

        aes_ecb_keys = aes_ecb.genkey()
        aes_ecb_encrypted = aes_ecb.encrypt(plaintext, aes_keys.key)
        aes_ecb_decrypted = aes_ecb.decrypt(aes_ecb_encrypted, aes_keys.key)

        console.log(`
        ----=====###### AES ECB ######=====----

        key : ${aes_keys.hex.key}

        plaintext   : ${plaintext}
        encrypted   : ${aes_ecb_encrypted}
        decrypted   : ${aes_ecb_decrypted}
        `)
    })();

    (() => {
        lib = aes.gcm

        keys = lib.genkey()
        encrypted = lib.encrypt(plaintext, aes_keys.key, keys.hex.iv)
        decrypted = lib.decrypt(encrypted.encrypted, aes_keys.key, keys.hex.iv, encrypted.authTag)

        console.log(`
        ----=====###### AES GCM ######=====----

        key : ${aes_keys.hex.key}
        iv  : ${keys.hex.iv}

        authtag :  ${encrypted.authTag}

        plaintext   : ${plaintext}
        encrypted   : ${encrypted.encrypted}
        decrypted   : ${decrypted}
        `)
    })();

    (() => {
        lib = aes.ofb

        keys = lib.genkey()
        encrypted = lib.encrypt(plaintext, aes_keys.key, aes_keys.iv)
        decrypted = lib.decrypt(encrypted, aes_keys.key, aes_keys.iv)

        console.log(`
        ----=====###### AES OFB ######=====----

        key : ${aes_keys.hex.key}
        iv  : ${keys.hex.iv}

        plaintext   : ${plaintext}
        encrypted   : ${encrypted}
        decrypted   : ${decrypted}
        `)
    })();
})();

// Blowfish
(() => {

    const bf = spinojs.blowfish;
    const bf_keys = bf.cbc.genkey();

    (() => {
        algo = bf.cbc

        keys = algo.genkey()
        encd = algo.encrypt(plaintext, bf_keys.key, bf_keys.iv)
        decd = algo.decrypt(encd, bf_keys.key, bf_keys.iv)

        console.log(`
        ----=====###### AES CBC ######=====----

        key : ${bf_keys.hex.key}
        iv  : ${bf_keys.hex.iv}

        plaintext   : ${plaintext}
        encrypted   : ${encd}
        decrypted   : ${decd}
        `)
    })();

})()




const algos = [ 'CAST-cbc',
  'aes-256-cbc', // Done
  'aes-256-cbc-hmac-sha1',  // Done
  'aes-256-cfb',  // Done
  'aes-256-cfb1',  // Done
  'aes-256-cfb8',  // Done
  'aes-256-ctr',  // Done
  'aes-256-ecb',  // Done
  'aes-256-gcm',  // Done
  'aes-256-ofb',  // Done
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
  'seed-ofb' ]