const readlineSync = require('readline-sync')
const os = require('os');

const getUserInput = () => {
    const homePath = os.homedir() + "/";
    let mainDirectory = readlineSync.question(`On which directory would you like to run this script?\n${homePath}`)
    mainDirectory = homePath + mainDirectory
    console.log("Directory = " + mainDirectory)
}

module.exports = { getUserInput };