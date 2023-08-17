const { getStringAfterLastSlash } = require("./getStringAfterLastSlash");

const filterSubdirectories = (subdirectories, textToReplace) => {
	let filteredSubdirectories = []
    subdirectories.forEach(subdirectory => {
        const currentFolder = getStringAfterLastSlash(subdirectory)
        if (currentFolder.includes(textToReplace)) {
            filteredSubdirectories.push(subdirectory)
        }
    })

    return filteredSubdirectories
};


module.exports = { filterSubdirectories };
