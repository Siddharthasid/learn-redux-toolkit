import { configureStore } from "@reduxjs/toolkit";
import simpleCounterReducer from "../features/simpleCounters/simpleCounerSlice";
import counterReducer from "../features/counters/counterSlice";

const store = configureStore({
  reducer: {
    simpleCounter: simpleCounterReducer,
    counters: counterReducer,
  },
});

export default store;
