const { getUserInput } = require("./functions/getUserInput");
const { locateSubdirectories } = require("./functions/locateSubdirectories");
const { getFilePaths } = require("./functions/getFilePaths");

const App = () => {
    const { homePath, mainDirectory, textToReplace, replacementText } = getUserInput();
    const subdirectories = locateSubdirectories(mainDirectory);
    const filepaths = getFilePaths(subdirectories);
    console.log(subdirectories)
    console.log(filepaths)
}   

App();