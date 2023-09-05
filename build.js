const fs = require('fs');
const path = require('path');
const uglify = require('uglify-js');

const getAllFiles = function(dirPath, arrayOfFiles) {
	const files = fs.readdirSync(dirPath);
  
	arrayOfFiles = arrayOfFiles || [];
  
	files.forEach(function(file) {
		if (fs.statSync(dirPath + '/' + file).isDirectory()) {
			if (!fs.existsSync(path.join(__dirname, dirPath.replace('src', 'build'), 'src', file))) {
				fs.mkdirSync(path.join(__dirname, dirPath.replace('src', 'build'), 'src', file));
			}
			arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles);
		} else {
			arrayOfFiles.push(path.join(dirPath, '/', file));
		}
	});
  
	return arrayOfFiles;
};

if (!fs.existsSync(path.join(__dirname, 'build'))) {
	fs.mkdirSync(path.join(__dirname, 'build'));
}

if (!fs.existsSync(path.join(__dirname, 'build', 'src'))) {
	fs.mkdirSync(path.join(__dirname, 'build', 'src'));
}

getAllFiles('src', ['index.js']).forEach((file) => {
	const inputFile = fs.readFileSync(file, 'utf8');
	const minified = uglify.minify(inputFile);

	fs.writeFileSync(path.join(__dirname, 'build', file), minified.code);
});