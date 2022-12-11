import { createSlice } from "@reduxjs/toolkit";
import {Todo} from './type'

const TodoState: Todo[] = [];

export const todoSlice = createSlice({
  name: "todos",
  initialState: { value: TodoState},
  reducers: {
    addTodo: (state, action) => {
      state.value.push(action.payload);
    },

    deleteTodo: (state, action) => {
      state.value = state.value.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;