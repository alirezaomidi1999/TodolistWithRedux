import { createSlice } from "@reduxjs/toolkit";
const getLocalStorage = JSON.parse(localStorage.getItem("todos")) || [];
const initialState = {
  todolist: getLocalStorage,
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todolist.push(action.payload);

      localStorage.setItem("todos", JSON.stringify(state.todolist));
    },
    removeTodo: (state, action) => {
      const newTodolist = state.todolist.filter(
        (item) => item.id !== action.payload
      );

      state.todolist = newTodolist;
      localStorage.setItem("todos", JSON.stringify(state.todolist));
    },
    toggleTodo: (state, action) => {
      const updateTodolist = state.todolist.find(
        (item) => item.id === action.payload
      );
      if (updateTodolist) updateTodolist.done = !updateTodolist.done;
      localStorage.setItem("todos", JSON.stringify(state.todolist));
    },
  },
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
