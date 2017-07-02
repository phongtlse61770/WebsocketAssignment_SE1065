import {ActionTypes} from '../../../Shared/ActionTypes';
import {Store} from '../store/Store.jsx';

class Action {
    /**
     * @param {User} user
     */
    static registerUser(user){
        let action = {
            type: ActionTypes.RegisterUser,
            data: user
        };
        Store.getStore().dispatch(action);
    }
}

export {Action};