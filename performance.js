const fs = require('fs');
const path = require('path');

function getFilesizeInBytes(filename) {
	var stats = fs.statSync(filename);
	var fileSizeInBytes = stats.size;
	return fileSizeInBytes;
}

const getAllFiles = function(dirPath, arrayOfFiles) {
	const files = fs.readdirSync(dirPath);
  
	arrayOfFiles = arrayOfFiles || [];
  
	files.forEach(function(file) {
		if (fs.statSync(dirPath + '/' + file).isDirectory()) {
			arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles);
		} else {
			arrayOfFiles.push(getFilesizeInBytes(path.join(dirPath, '/', file)));
		}
	});
  
	return arrayOfFiles;
};

function formatSizeUnits(bytes){
	if      (bytes >= 1073741824) { bytes = (bytes / 1073741824).toFixed(2) + ' GB'; }
	else if (bytes >= 1048576)    { bytes = (bytes / 1048576).toFixed(2) + ' MB'; }
	else if (bytes >= 1024)       { bytes = (bytes / 1024).toFixed(2) + ' KB'; }
	else if (bytes > 1)           { bytes = bytes + ' bytes'; }
	else if (bytes == 1)          { bytes = bytes + ' byte'; }
	else                          { bytes = '0 bytes'; }
	return bytes;
}

const requireTimeStart = performance.now();
const spinojs = require('./build/index');
const requireTime = performance.now() - requireTimeStart;

const requireTimeBcryptStart = performance.now();
require('bcrypt');
const requireTimeBcrypt = performance.now() - requireTimeBcryptStart;

console.log('SpinoJs size:', formatSizeUnits(getAllFiles('./build').reduce((a, b) => a + b, 0)), 'compared to uncompressed size of', formatSizeUnits(getAllFiles('./src').reduce((a, b) => a + b, 0)), '\n');
console.log('SpinoJs require time:', requireTime + '/ms', '\nBcrypts require time:',requireTimeBcrypt + '/ms\n');

const crypto = require('crypto');

const hashAlgos = {...spinojs.sha, ...spinojs.md5, bcrypt: spinojs.bcrypt};
const hashTimes = {};
const unitSize = 30;

console.log('Benchmarking hashing algorithms will take approx', Math.round((unitSize * 1000) / 650), 'seconds unit size of', unitSize, '\n');

Object.keys(hashAlgos).forEach((algo) => {
	hashTimes[algo] = [];
	const randomData = [];

	for (let index = 0; index < unitSize; index++) {
		randomData.push(crypto.randomBytes(1000));
	}

	randomData.forEach((plaintext) => {

		if (algo === 'bcrypt') {
			const start = performance.now();
			hashAlgos[algo].hash(plaintext);
			hashTimes[algo].push(performance.now() - start);
		} else {
			const start = performance.now();
			hashAlgos[algo](plaintext);
			hashTimes[algo].push(performance.now() - start);
		}
	});

});

Object.keys(hashTimes).forEach((hashTime, i) => {
	hashTime = hashTimes[hashTime];
	const sum = hashTime.reduce((a, b) => a + b, 0);
	const avg = (sum / hashTime.length) || 0;

	const diff = 10000;
	console.log(Object.keys(hashTimes)[i] + (Object.keys(hashTimes)[i].length < 8 ? '\t' : '') + '\tavg of', Math.round(avg *diff) / diff,'ms');
});