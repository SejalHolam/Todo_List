import { createContext } from "react";

export const TodoItemsContext = createContext({
  todos: [],
  addTodo: () => {},
  deleteTodo: () => {},
  toggleComplete: () => {},
  editTodo: () => {},
  filteredTodos: () => {},
});
