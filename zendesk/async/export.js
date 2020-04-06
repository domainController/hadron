var request = require('request');
var API_VERSION = 'v2';

var ZDRequest = function(config){
  return {
    get: function(uri){
      var options = {
        url: config.url + '/api/' + API_VERSION + '/' + uri,
        headers: {
          Authorization: config.authorization
        },
        forever: true
      }

      return new Promise(function(fufill, reject){
        request(options, function(err, res, body){
          if (err) { reject(err); }
          fufill(JSON.parse(body));
        });
      })
    },