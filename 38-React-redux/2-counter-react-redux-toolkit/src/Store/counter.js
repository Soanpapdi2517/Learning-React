import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 0 },
  reducers: {
    Increment: (
      state /*action not using because we don't need to use action.type === "INCREMENT"*/
    ) => {
      state.counterVal = state.counterVal + 1;
    },
    Decrement: (
      state /*action not using because we don't need to use action.type === "INCREMENT"*/
    ) => {
      state.counterVal = state.counterVal - 1; //expression that is why we are not using return
    },
    Add: (state, action) => {
      state.counterVal = state.counterVal + Number(action.payload.num);
    },
    Substract: (state, action) => {
      state.counterVal = state.counterVal - action.payload.num;
    },
  },
});

export const counterAction = counterSlice.actions;

export default counterSlice;
