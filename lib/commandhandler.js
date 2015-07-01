"use strict";

var _ = require('lodash'),
    chalk = require("chalk"),
    Promise = require('bluebird'),

    args = require('minimist')(process.argv.slice(2)),

    argumentHandler = require('../lib/argumenthandler');


function commandHandler(mode, arg){
 //TODO
}


module.exports = {
  gistploy: function(arg) {
    return commandHandler('gistploy', arg);
  }
}