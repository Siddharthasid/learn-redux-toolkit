import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    value: 0,
  },
  {
    id: 2,
    value: 0,
  },
  {
    id: 3,
    value: 0,
  },
  {
    id: 4,
    value: 0,
  },
];

const counterSlice = createSlice({
  name: "counters",
  initialState,
  reducers: {
    increment: (state, action) => {
      const countIndex = state.findIndex((obj) => obj.id == action.payload);
      //   console.log(countIndex, action);
      state[countIndex].value++;
    },
    decrement: (state, action) => {
      const counterIndex = state.findIndex((obj) => obj.id == action.payload);
      state[counterIndex].value--;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
