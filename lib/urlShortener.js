"use strict";

var request = require("request-promise");


function getRawGitUrl(gistUrl){
  return gistUrl.replace('//gist.githubusercontent.com/', '//cdn.rawgit.com/');
}

function _create(gistUrl){
  //use rawgit's CDN
  var rawGistUrl = getRawGitUrl(gistUrl);

  //use git.io short url combined with redirect hax.
  return request({
    host: 'git.io',
    url: 'https://git.io/create',
    method: 'post',
    form: {
      'url': 'https://reimertz.github.io/gistploy/index.html?url=' + encodeURIComponent(rawGistUrl)
    }
  });
}

module.exports = {
  create: function(gistUrl) {
    return _create(gistUrl);
  }
}