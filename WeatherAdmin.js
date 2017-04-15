let fs = require('fs');

let UserSearch = require('./UserSearch.js');


var displayAdminLog = function() {
    fs.readFile('log.txt', 'utf8', (error, data) => {
        if (error) {
            throw error;
        } else {
            console.log(data);
        }
    })
}

var displayAdminLog = function() {
    fs.readFile('log.txt', 'utf8', (error, data) => {
        if (error) {
            throw error;
        } else {
            console.log(data);
        }
    })
}

var newUserSearch = function(username, zip) {
    var search = UserSearch(username, zip);
    search.getWeather();
}

module.exports = {
    displayAdminLog: displayAdminLog,
    newUserSearch: newUserSearch
};

