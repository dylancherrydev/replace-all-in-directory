const { getUserInput } = require("./functions/getUserInput");

const App = () => {
    const { homePath, mainDirectory, textToReplace, replacementText } = getUserInput();
    console.log(homePath, mainDirectory, textToReplace, replacementText)
}   

App();