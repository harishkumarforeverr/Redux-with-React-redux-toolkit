import { configureStore } from "@reduxjs/toolkit";
import { BuilderCallbackCounterSlice } from "../createReducer/These-R2-Types/Builder-Callback/BuilderCallback";
// import { Map_Object_notation } from "../createReducer/These-R2-Types/Map-Object_notation/Map_Object_notation";
import CounterSlice from "../CreateSlice/store";
import PostSlice from "../createAsyncThunk/Json_placeholder_slice";
const store = configureStore({
  reducer: {
    // counter: BuilderCallbackCounterSlice,
    // counter: Map_Object_notation,
    CounterSlice:CounterSlice
    // post: PostSlice,
  },
});

export default store;
