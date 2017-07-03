const WsStart = require("./WebSocketServer").start;
const Store =  require('./redux/Store').Store;


class WebSocketService {
    static sendAction(action){
        client.sendMessage(JSON.stringify(action));
    }

    static receiveAction(json){
        let obj = JSON.parse(json);
        Store.dispath(obj);
    }
}

export {WebSocketService}