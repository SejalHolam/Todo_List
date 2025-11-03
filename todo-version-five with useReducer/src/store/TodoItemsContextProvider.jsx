import { createContext, useReducer } from "react";
import { todoReducer } from "./TodoReducer";

export const TodoItemsContext = createContext();

export const TodoItemsContextProvider = ({ children }) => {
  const initialState = {
    todos: [],
    filter: "all",
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);
  //state → is one single object that holds all your app’s state.

  const filteredTodos = state.todos.filter((todo) => {
    if (state.filter === "active") return !todo.completed;
    if (state.filter === "completed") return todo.completed;
    return true; // 'all'
  });

  const addTodo = (newTodo) => {
    dispatch({ type: "ADD_TODO", payload: newTodo });
  };

  const deleteTodo = (idToDelete) => {
    dispatch({ type: "DELETE_TODO", payload: idToDelete });
  };

  const toggleComplete = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  const editTodo = (id, newName, newDueDate) => {
    dispatch({ type: "EDIT_TODO", payload: { id, newName, newDueDate } });
  };

  const setFilter = (filter) => {
    dispatch({ type: "SET_FILTER", payload: filter });
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todos: state.todos, 
        addTodo,
        deleteTodo,
        toggleComplete,
        editTodo,
        filteredTodos,
        filter: state.filter,
        setFilter,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};