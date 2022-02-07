
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchJsonPlaceholderData = createAsyncThunk(
  "users/posts",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    console.log(payload)
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return data;
    } catch (error) {
      return error?.response;
    }
  }
);

const PostSlice = createSlice({
  name: "posts",
  initialState: {},
  extraReducers: {
    [FetchJsonPlaceholderData.pending]: (state, action) => {
      state.pending = true;
    },
    [FetchJsonPlaceholderData.fulfilled]: (state, action) => {
      state.pending = false;
      state.postList = action.payload;
    },
    [FetchJsonPlaceholderData.rejected]: (state, action) => {
      state.pending = false;
      state.postList = "some Went Wrong, try again" + action.payload;
    },
  },
});

export default PostSlice.reducer;
