import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};
const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state, action) {
      state.counter++;
    },
    decrement(state, action) {
      state.counter--;
    },
    incrementByAmount(state, action) {
      state.counter += action.payload.value;
    },
  },
});

export const { increment, decrement, incrementByAmount } = CounterSlice.actions;

export default CounterSlice.reducer;
