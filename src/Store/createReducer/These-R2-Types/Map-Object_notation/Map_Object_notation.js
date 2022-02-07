import { createReducer } from "@reduxjs/toolkit";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../../../createAction/Action";
const initialState = {
  count: 0,
};
let Obj2 = increment(100);
console.log("increment", Obj2);
export const Map_Object_notation = createReducer(initialState, {
  [increment]: (state, action) => {
    state.count++;
  },
  [decrement]: (state, action) => {
    state.count--;
  },
  [incrementByAmount]: (state, action) => {
    state.count += action.payload.value;
  },
});
