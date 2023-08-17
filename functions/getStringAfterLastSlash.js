const getStringAfterLastSlash = (string) => {
    return string.split('/').pop();

}

module.exports = { getStringAfterLastSlash };