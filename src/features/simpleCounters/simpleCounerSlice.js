import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const simpleCounterSlice = createSlice({
  name: "simpleCounterSlice",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value > 0) {
        state.value -= 1;
      }
    },
    incrementBy: (state, action) => {
      state.value += action.payload;
    },
    decrementBy: (state, action) => {
      if (state.value > 0) {
        state.value += action.payload;
      }
    },
  },
});

export default simpleCounterSlice.reducer;
export const { increment, decrement, incrementBy, decrementBy } =
  simpleCounterSlice.actions;
