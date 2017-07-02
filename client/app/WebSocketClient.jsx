import {webSocketPort} from '../../Shared/Constants';

class WebSocketClient{
    constructor(){
        window.WebSocket = window.WebSocket || window.MozWebSocket;
        let connection = new WebSocket('ws://localhost:'+webSocketPort);

        this.handleOnError = this.handleOnError.bind(this);
        this.handleOnOpen = this.handleOnOpen.bind(this);
        this.handleOnMessage = this.handleOnMessage.bind(this);

        connection.onopen = this.handleOnOpen;
        connection.onerror  = this.handleOnError;
        connection.onmessage  = this.handleOnMessage;

        this.connection = connection;
    }

    sendMessage(message){
        this.connection.send(message);
    }

    handleOnError(err){
        console.log('Connect Error: ' + err.toString());
    }

    handleOnOpen(){
        console.log('WebSocket Client Connected');
    }

    handleOnMessage(message){
        try {
            let json = JSON.parse(message.data);
            console.log(json);
        } catch (e) {
            console.log('This doesn\'t look like a valid JSON: ',
                message.data);
        }
    }
}

export {WebSocketClient}