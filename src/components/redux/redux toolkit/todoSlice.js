import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todolist: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todolist.push(action.payload);
    },
    removeTodo: (state, action) => {
      const newTodolist = state.todolist.filter(
        (item) => item.id !== action.payload
      );
      state.todolist = newTodolist;
    },
    toggleTodo: (state, action) => {
      const updateTodolist = state.todolist.find(
        (item) => item.id === action.payload
      );
      if (updateTodolist) updateTodolist.done = !updateTodolist.done;
    },
  },
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
