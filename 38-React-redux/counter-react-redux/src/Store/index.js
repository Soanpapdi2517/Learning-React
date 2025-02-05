import { createStore } from "redux";

const INITIAL_VALUE = {
  counter: 0,
  night: false,
};
const reducer = (store = INITIAL_VALUE, action) => {
    if(action.type === "INCREMENT"){
        return {...store, counter: store.counter + 1} 
    }else if(action.type === "DECREMENT"){
        return {...store, counter: store.counter - 1}
    }else if (action.type === "ADDITION"){
        return {...store, counter: store.counter + Number(action.payload.num)}
    }else if (action.type === "SUBSTRACT"){
        return {...store, counter: store.counter - Number(action.payload.num)}
    }else if (action.type === "NIGHT_MODE"){
        return {...store, night: !store.night}
    }
    return store;
    }

const counterStore = createStore(reducer);

export default counterStore;
