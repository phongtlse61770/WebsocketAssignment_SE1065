const Store = require('./Store').Store;
const http = require("http");
const WebSocketServer = require("websocket").server;

var server = http.createServer();
const wsServer = new WebSocketServer({
    httpServer: server
});

sendAction = function (action) {
    wsServer.broadcast(JSON.stringify(action));
};

receiveAction = function (message,connection) {
    const obj = JSON.parse(message.utf8Data);
    Store.dispatch(obj);
};

start = function (port) {
    server.listen(port, function () {
        console.log("Websocket address: localhost:" + port);
    });
    var callback = this.receiveAction;

    wsServer.on("request", function (request) {
        var connection = request.accept(null, request.origin);
        connection.on("message", function (message) {
            callback(message,connection);
        });
        connection.on("close", function (connection) {
            console.log("Connection close");
        });
    });
};


module.exports = {
    sendAction: sendAction,
    receiveAction: receiveAction,
    start: start
};