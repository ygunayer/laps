
var request = require('request-promise');

var codewarsUrl = 'https://www.codewars.com/api/v1';

module.exports = {
    getKata: function(idOrSlug) {
        return request({
            method: 'GET',
            url: codewarsUrl + '/code-challenges/' + idOrSlug,
            json: true
        });
    },
    getUser: function(username) {
        return request({
            method: 'GET',
            url: codewarsUrl + '/users/' + username,
            json: true
        });
    }
};
