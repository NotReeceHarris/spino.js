/*
AES-ECB (Electronic Codebook Mode)

This is the basic mode of AES encryption. It encrypts 
each block of data independently, which can lead to some 
security vulnerabilities if used incorrectly.
*/

const crypto = require('crypto');

const genkey = (encoding="hex") => {

    const key = crypto.randomBytes(32)

    return {
        [encoding]: {
            key: key.toString(encoding),
        },
        buffer: {
            key,
        },
        key,
    }
}

const encrypt = (plaintext, key, encoding="hex") => {
    if (!Buffer.isBuffer(key)) {
        try {
            key = Buffer.from(key, encoding)
        } catch (error) {
            throw new Error('Mismatched encoding types when passing key')
        }
    }

    const cipher = crypto.createCipheriv('aes-256-ecb', key, null);
    let encryptedData = cipher.update(plaintext, 'utf8', encoding);
    encryptedData += cipher.final(encoding);

    return encryptedData
}

const decrypt = (encryptedData, key, encoding="hex") => {

    if (!Buffer.isBuffer(key)) {
        try {
            key = Buffer.from(key, encoding)
        } catch (error) {
            throw new Error('Mismatched encoding types when passing key')
        }
    }

    const decipher = crypto.createDecipheriv('aes-256-ecb', key, null);
    let decryptedData = decipher.update(encryptedData, encoding, 'utf8');
    decryptedData += decipher.final('utf8');

    return decryptedData
}

module.exports = {genkey, encrypt, decrypt}