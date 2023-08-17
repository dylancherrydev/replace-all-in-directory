const { getUserInput } = require("./functions/getUserInput");
const { locateSubdirectories } = require("./functions/locateSubdirectories");
const { getFilePaths } = require("./functions/getFilePaths");
const { filterSubdirectories } = require("./functions/filterSubdirectories");

const App = () => {
    const { homePath, mainDirectory, textToReplace, replacementText } = getUserInput();
    const subdirectories = locateSubdirectories(mainDirectory);
    const filepaths = getFilePaths(subdirectories);
    const filteredSubdirectories = filterSubdirectories(subdirectories, textToReplace);

    console.log("\nSubdirectories that will have their name changed:")
    filteredSubdirectories.forEach(subdirectory => {
        console.log("\x1b[31m" + subdirectory + "\x1b[0m")
    })
    filteredFiles = filterFiles();

}   

App();