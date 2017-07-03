var WebSocketServer = require("websocket").server;
var express = require("express");
var http = require("http");
var ActionTypes = require("../../Shared/ActionTypes").ActionTypes;
var Store = require("./redux/Store").Store;

// function htmlEncode(str) {
//     return String(str)
//         .replace(/&/g, '&amp;').replace(/</g, '&lt;')
//         .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
// }


//Http server
var server = http.createServer();


//WebSocket server
wsServer = new WebSocketServer({
    httpServer: server
});

wsServer.on("request", function (request) {
    var connection = request.accept(null, request.origin);
    connection.on("message", function (message) {
        var action = JSON.parse(message.utf8Data);
        Store.dispatch(action);
    });
    connection.on("close", function (connection) {
        console.log("Connection close");
    });
});

function start(port) {
    server.listen(port,function () {
        console.log("Websocket address: localhost:"+port);
    });
}

module.exports = {
    start: start
};