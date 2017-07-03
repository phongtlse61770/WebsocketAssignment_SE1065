var ActionTypes = require("./ActionTypes").ActionTypes;

const Action = {
    /**
     * @param {User} user
     */
    registerUser: function (user) {
        return {
            type: ActionTypes.RegisterUser,
            data: user
        };
    },

    registerUserResponse: function (user,isSuccess) {
        return {
            type: ActionTypes.RegisterUserResponse,
            data: {
                user:user,
                isSuccess : isSuccess
            }
        };
    }
};

module.exports = {
    Action: Action
};