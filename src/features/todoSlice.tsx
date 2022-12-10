import { createSlice } from "@reduxjs/toolkit";
import { PostsData } from "../DummyData";
import {Todo} from './type'

const initialState: Todo[] = [];

export const postSlice = createSlice({
  name: "posts",
  initialState: { value: initialState},
  reducers: {
    addTodo: (state, action) => {
      state.value.push(action.payload);
    },

    deleteTodo: (state, action) => {
      state.value = state.value.filter((post) => post.id !== action.payload.id);
    },
  },
});

export const { addTodo, deleteTodo } = postSlice.actions;
export default postSlice.reducer;