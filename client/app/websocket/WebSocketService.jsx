import {WebSocketClient} from './WebSocketClient.jsx';
import {Store} from '../store/Store.jsx';


class WebSocketService {
    static sendAction(action){
        console.log("Send json %o",action);
        client.sendMessage(JSON.stringify(action));
    }

    static receiveAction(json){
        // let obj = JSON.parse(json);
        console.log("Receive json"+json);
        Store.dispatch(json);
    }
}

const client = new WebSocketClient(WebSocketClient.receiveAction);


export {WebSocketService}