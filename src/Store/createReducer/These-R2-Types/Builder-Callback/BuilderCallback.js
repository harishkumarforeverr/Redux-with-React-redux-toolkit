import { createReducer } from "@reduxjs/toolkit";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../../../createAction/Action";
const initialState = {
  count: 0,
};
let Obj = increment();
console.log("increment", Obj);
let Obj2 = increment(100);
console.log("increment", Obj2);
export const BuilderCallbackCounterSlice = createReducer(
  initialState,
  (builder) => {
    builder.addCase(increment, (state, payload) => {
      state.count++;
    });
    builder.addCase(decrement, (state, action) => {
      state.count--;
    });
    builder.addCase(incrementByAmount, (state, action) => {
      // here action.payload may be object or primitive type if we pass Object as paramter then payload act as a Object
      // if we pass the value,or string or any primitive data type then it act as a primtive value
      // overall payload is default / pre-defined value
      state.count += action.payload.value;
    });
  }
);
