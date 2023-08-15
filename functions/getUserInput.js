const readlineSync = require('readline-sync')
const os = require('os');

const getUserInput = () => {
    const homePath = os.homedir() + "/";
    let mainDirectory = readlineSync.question(`On which directory would you like to run this script?\n${homePath}`)
    mainDirectory = homePath + mainDirectory
    console.log("Directory = " + mainDirectory)

    const textToReplace = readlineSync.question(`What is the exact text to be replaced?\n`)
    const replacementText = readlineSync.question(`What would you like to replace it with?\n`)

    console.log(`Text to replace = ${textToReplace}\nReplacement text = ${replacementText}`)

    return { homePath, mainDirectory, textToReplace, replacementText };
}

module.exports = { getUserInput };