import { createSlice } from "@reduxjs/toolkit";

const nightSlice = createSlice({
  name: "night_mode",
  initialState: false,
  reducers: {
    toggle: (state) => {
      return (state = !state);
    },
  },
});

export const nightAction = nightSlice.actions;

export default nightSlice;