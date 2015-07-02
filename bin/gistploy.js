#!/usr/bin/env node
"use strict";

var args = require('minimist')(process.argv.slice(2)),
    commandHandler = require('../lib/commandHandler'),
    argumentHandler = require('../lib/argumentHandler');


//Check for --help
argumentHandler.check(args);

//execute gistploy command
commandHandler.gistploy(args);