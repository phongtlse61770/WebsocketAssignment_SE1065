var WebSocketStarter = require("./app/websocket");
var ExpressStarter = require("./app/express");

var WebSocketPort = 5000;
var expressPort = 80;

WebSocketStarter.start(WebSocketPort);
ExpressStarter.start(expressPort);