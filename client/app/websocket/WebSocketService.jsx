import {WebSocketClient} from './WebSocketClient.jsx';
import {Store} from '../store/Store.jsx';

const client = new WebSocketClient(WebSocketClient.receiveAction);

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