import {ActionTypes} from '../../../Shared/ActionTypes';

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
            newState = Object.assign({}, state, {currentUser: data});
    }
    return newState;
};

export {reducer};