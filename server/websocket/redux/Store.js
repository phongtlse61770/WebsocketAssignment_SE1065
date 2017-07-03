const createStore = require("redux").createStore;
const reducer = require("./Reducer").reducer;

const store = createStore(reducer);
const storeListener = [];

const Store = {
    dispatch : function(action){
        store.dispatch(action);
    },

    getState : function(){
        return store.getState();
    },

    emit : function(){
        for (var i = 0; i < storeListener.length; i++) {
            storeListener[i]();
        }
    },

    subscribe : function(callback){
        storeListener.push(callback);
    },

    unSubscribe : function(callback){
        storeListener.remove(callback);
    }
};

store.subscribe(Store.emit);

module.exports = {Store: Store};