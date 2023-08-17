const fs = require("fs");
const path = require("path");

const locateSubdirectories = (mainDirectory) => {
	const subdirectories = [];

	const getSubdirectoriesRecursively = (directory) => {
		const files = fs.readdirSync(directory);
		files.forEach((file) => {
			const filePath = path.join(directory, file);
			const stat = fs.statSync(filePath);
			if (
				stat.isDirectory() &&
				!["node_modules", ".git", ".github", ".vscode"].some((item) =>
					filePath.includes(item)
				)
			) {
				subdirectories.push(filePath);
				getSubdirectoriesRecursively(filePath);
			}
		});
	};

	getSubdirectoriesRecursively(mainDirectory);
	return subdirectories;
};

module.exports = { locateSubdirectories };
