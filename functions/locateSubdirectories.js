const fs = require("fs");
const path = require("path");

const locateSubdirectories = (mainDirectory) => {
	const subdirectories = [];

	getSubdirectoriesRecursively = (mainDirectory) => {
		const files = fs.readdirSync(mainDirectory);
		files.forEach(file => {
			const filePath = path.join(mainDirectory, file);
			const stat = fs.statSync(filePath);
			if (stat.isDirectory() && !filePath.includes('node_modules')) {
				subdirectories.push(filePath);
				getSubdirectoriesRecursively(filePath);
			}
		})
	}
	getSubdirectoriesRecursively(mainDirectory)
	return subdirectories
};


module.exports = { locateSubdirectories };
