var WebSocketStarter = require("./server/websocket/websocket");
var ExpressStarter = require("./server/express/express");

var WebSocketPort = 5000;
var expressPort = 80;

WebSocketStarter.start(WebSocketPort);
ExpressStarter.start(expressPort);