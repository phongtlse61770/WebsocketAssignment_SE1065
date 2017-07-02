var WebSocketStarter = require("./server/websocket/websocket");
var ExpressStarter = require("./server/express/express");
var constant = require('./Shared/Constants');


var WebSocketPort = constant.webSocketPort;
var expressPort = constant.expressPort;

WebSocketStarter.start(WebSocketPort);
ExpressStarter.start(expressPort);