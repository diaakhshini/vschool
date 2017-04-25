var validate = function (obj) {
    for (key in obj) {
        if (obj[key] == undefined || obj[key] == "") {
            return {
                pass: false,
                failure: "Error missing"
            }
        }
    }
    return true;
}

module.exports = validate;