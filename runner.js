/* jshint unused:true, node:true */
"use strict";

var IRCPORT = process.env.IRCPORT || 6667;
var WEBPORT = process.env.WEBPORT || 4567;

var memwatch = require('memwatch');
var Server   = require('./lib/server');

memwatch.on('leak', function(info) {
  console.log('[memwatch]', info.growth, info.reason);
});

var server = new Server();
server.start({irc: IRCPORT, web: WEBPORT});
