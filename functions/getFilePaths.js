const fs = require('fs');
const path = require('path');

const getFilePaths = (subdirectories) => {
	let filepaths = []
	try {
		subdirectories.forEach(directory => {
			const files = fs.readdirSync(directory);
			files.forEach(file => {
				const filePath = path.join(directory, file);
				const stat = fs.statSync(filePath);
				if (stat.isFile()) {
					filepaths.push(filePath)	
				  }
			})
		})
	}
	catch (error) {
		console.log(error)
	}

	return filepaths;
};


module.exports = { getFilePaths };
