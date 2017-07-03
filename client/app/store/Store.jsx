import {createStore} from 'redux';
import {reducer} from '../reducer/Reducer.jsx';

const store = createStore(reducer);
const storeListener = [];
class Store {
    static dispatch(action){
        store.dispatch(action);
    }

    static getState(){
        return store.getState();
    }

    static emit(){
        for (let i = 0; i < storeListener.length; i++) {
            storeListener[i]();
        }
    }

    static subscribe(callback){
        storeListener.push(callback);
    }

    static unSubscribe(callback){
        storeListener.remove(callback);
    }
}
store.subscribe(Store.emit);
export {Store}