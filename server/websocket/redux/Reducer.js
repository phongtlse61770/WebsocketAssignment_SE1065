const _ = require("lodash");
const ActionTypes = require('../../../Shared/ActionTypes').ActionTypes;
const ws = require("../WebSocketServer");


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
            var isDuplicated = RegisterUser(newState,data);

    }

    return newState;
};

function RegisterUser(state,newUser){
    var isDuplicated = false;
    for(var i = 0; i < state.users.length;i++){
        var user = state.users[i];
        if(user.username === newUser.username){
            isDuplicated = true;
        }
    }
    if(!isDuplicated){
        state.users.push(newUser);
    }
    return isDuplicated;
}

module.exports = {reducer : reducer};