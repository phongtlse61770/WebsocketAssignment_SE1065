var WebSocketStarter = require("./websocket/websocket");
var ExpressStarter = require("./express/express");

var WebSocketPort = 5000;
var expressPort = 80;

WebSocketStarter.start(WebSocketPort);
ExpressStarter.start(expressPort);