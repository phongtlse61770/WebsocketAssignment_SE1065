const WebSocketService = require("./server/websocket/WebSocketService");
const ExpressStarter = require("./server/express/express");
const constant = require('./Shared/Constants');

var WebSocketPort = constant.webSocketPort;
var expressPort = constant.expressPort;

WebSocketService.start(WebSocketPort);
ExpressStarter.start(expressPort);