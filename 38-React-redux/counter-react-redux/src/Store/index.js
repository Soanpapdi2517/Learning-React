import { createStore } from "redux";

const INITIAL_VALUE = {
  counter: 0,
  night: false,
};
const reducer = (store = INITIAL_VALUE, action) => {
    let newStore = store;
    if(action.type === "INCREMENT"){
        newStore = {...store, counter: store.counter + 1} 
    }else if(action.type === "DECREMENT"){
        newStore = {...store, counter: store.counter - 1}
    }else if (action.type === "ADDITION"){
        newStore = {...store, counter: store.counter + Number(action.payload.num)}
    }else if (action.type === "SUBSTRACT"){
        newStore = {...store, counter: store.counter - Number(action.payload.num)}
    }else if (action.type === "NIGHT_MODE"){
        newStore = {...store, night: !store.night}
    }
    return newStore;
    }

const counterStore = createStore(reducer);

export default counterStore;
