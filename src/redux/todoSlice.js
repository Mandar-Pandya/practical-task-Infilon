import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      const newTodos = state.todos.filter((todo) => todo.id !== action.payload);
      state.todos = newTodos;
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
