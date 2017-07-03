import {ActionTypes} from '../../../Shared/ActionTypes';
import {WebSocketService} from '../websocket/WebSocketService.jsx';

let initialState = {
    users: [],
    currentUser: undefined
};

let reducer = function (state, action) {
    if (state === undefined) {
        return initialState;
    }

    const {
        data,
        type
    } = action;

    let newState = state;
    switch (type) {
        case ActionTypes.RegisterUser:
            WebSocketService.sendAction(action);
    }
    return newState;
};

export {reducer};