var WebSocketServer = require("websocket").server;
var express = require("express");
var http = require("http");


function htmlEncode(str) {
    return String(str)
        .replace(/&/g, '&amp;').replace(/</g, '&lt;')
        .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}


//Http server
var server = http.createServer(function (request, response) {

});


//WebSocket server
wsServer = new WebSocketServer({
    httpServer: server
});

wsServer.on("request", function (request) {
    var connection = request.accept(null, request.origin);
    connection.on("message", function (message) {

    });
    connection.on("close", function (connection) {

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