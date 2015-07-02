"use strict";

var request = require("request-promise"),
    random_ua = require('random-ua');


function _create(indexFile, isPublic){
  var bodyString =
    '{"description":"index.html","public":"' + isPublic + '", "files":{"index.html":{"content":' + JSON.stringify(indexFile) + '}}';

  return request({
    url: 'https://api.github.com/gists',
    headers: {
      'User-Agent': random_ua.generate()
    },
    method: 'post',
    body: bodyString
  });
}

module.exports = {
  create: function(indexFile, isPublic) {
    return _create(indexFile, isPublic);
  }
}
