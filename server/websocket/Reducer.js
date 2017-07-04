const _ = require("lodash");

const ActionTypes = require('../../Shared/ActionTypes').ActionTypes;
const Action = require('../../Shared/Action').Action;

const initialState = {
    users: []
};

const reducer = function (state, action) {

    if (state === undefined) {
        return initialState;
    }

    const type = action.type;
    const data = action.data;

    var newState = _.assign({}, state);
    switch (type) {
        case ActionTypes.RegisterUser:
            var isDuplicated = RegisterUser(newState, data);
            // sendAdtion(Action.registerUserResponse(data, isDuplicated));
            sendAction(Action.registerUserResponse(data, !isDuplicated));
    }

    return newState;
};

function sendAction(action){
    const WebSocketService = require("../../server/websocket/WebSocketService");
    WebSocketService.sendAction(action);
}

function RegisterUser(state, newUser) {
    var isDuplicated = false;
    for (var i = 0; i < state.users.length; i++) {
        var user = state.users[i];
        if (user.name === newUser.name) {
            isDuplicated = true;
        }
    }
    if (!isDuplicated) {
        state.users.push(newUser);
    }
    return isDuplicated;
}


module.exports = {reducer: reducer};