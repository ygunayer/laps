
var request = require('request');

var codewarsUrl = 'https://www.codewars.com/api/v1';

module.exports = {
    getKata: function(idOrSlug, callback) {
        request({
            method: 'GET',
            url: codewarsUrl + '/code-challenges/' + idOrSlug,
            json: true
        }, callback);
    },
    getUser: function(username, callback) {
        request({
            method: 'GET',
            url: codewarsUrl + '/users/' + username,
            json: true
        }, callback);
    }
};
