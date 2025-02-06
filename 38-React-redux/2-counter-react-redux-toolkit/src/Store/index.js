import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import nightSlice from "./nightMode";

const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    night_mode: nightSlice.reducer,
  },
});

export default counterStore;

// import { createStore } from "redux";

// const INITIAL_VALUE = {
//   counter: 0,
//   night: false,
// };
// const counterStore = createStore(reducer);

// const reducer = (store = INITIAL_VALUE, action) => {
//   let newStore = store;
//   if (action.type === "INCREMENT") {
//     newStore = { ...store, counter: store.counter + 1 };
//   } else if (action.type === "DECREMENT") {
//     newStore = { ...store, counter: store.counter - 1 };
//   } else if (action.type === "ADDITION") {
//     newStore = {
//       ...store,
//       counter: store.counter + Number(action.payload.num),
//     };
//   } else if (action.type === "SUBSTRACT") {
//     newStore = {
//       ...store,
//       counter: store.counter - Number(action.payload.num),
//     };
//   } else if (action.type === "NIGHT_MODE") {
//     newStore = { ...store, night: !store.night };
//   }
//   return newStore;
// };
