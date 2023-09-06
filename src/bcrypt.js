/*
    Bcrypt is only loaded/required when its needed to speed up load time for spino.js libary
*/

module.exports = {
	/**
     * Hashes a plaintext password using bcrypt with a specified number of salt rounds.
     * @param {string} plaintext - The plaintext password to be hashed.
     * @param {number} [saltRounds=12] - The number of salt rounds for bcrypt hashing (default is 12).
     * @returns {Promise<string>} A Promise that resolves to the bcrypt hashed password.
     * @throws {Error} If an error occurs during hashing.
    */
	hash: (plaintext, saltRounds=12) => {
		const bcrypt = require('bcrypt');
		return new Promise((res, rej) => {
			bcrypt.genSalt(saltRounds, function(err, salt) {
				bcrypt.hash(plaintext, salt, function(err, hash) {
					if (err) rej(err);
					res(hash);
				});
			});
		});
	},
	/**
     * Compares a plaintext password with a bcrypt hash to check for a match.
     * @param {string} plaintext - The plaintext password to be compared.
     * @param {string} hash - The bcrypt hash to compare against.
     * @returns {Promise<boolean>} A Promise that resolves to true if the plaintext matches the hash, false otherwise.
     * @throws {Error} If an error occurs during comparison.
    */
	compare: (plaintext, hash) => {
		const bcrypt = require('bcrypt');
		return new Promise((res, rej) => {
			bcrypt.compare(plaintext, hash, function(err, result) {
				if (err) rej(err);
				res(result);
			});
		});
	}
};