const { getUserInput } = require("./functions/getUserInput");
const { locateSubdirectories } = require("./functions/locateSubdirectories");

const App = () => {
    const { homePath, mainDirectory, textToReplace, replacementText } = getUserInput();
    const subdirectories = locateSubdirectories(mainDirectory);
    console.log(subdirectories)
}   

App();