import {ActionTypes} from '../../../Shared/ActionTypes';
import {WebSocketService} from '../websocket/WebSocketService.jsx';
import _ from "lodash"

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

    let newState = _.assign({}, state);
    switch (type) {
        case ActionTypes.RegisterUser:
            WebSocketService.sendAction(action);
            break;
        case ActionTypes.RegisterUserResponse:
            newState.users.push(data.user);
            break;
    }
    return newState;
};

export {reducer};