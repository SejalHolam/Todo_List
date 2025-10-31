import { useState } from "react";
import { createContext } from "react";

export const TodoItemsContext = createContext();

export const TodoItemsContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const [filter, setFilter] = useState("all"); // all, active, completed

  const addTodo = (newTodo) => {
    const updatedTodoList = [...todos, newTodo];
    updatedTodoList.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    setTodos(updatedTodoList);
  };

  const deleteTodo = (idToDelete) => {
    const todoAfterDel = todos.filter((todo) => todo.id !== idToDelete);
    setTodos(todoAfterDel);
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const editTodo = (id, newName, newDueDate) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id
        ? { ...todo, itemName: newName, dueDate: newDueDate }
        : todo
    );
    updatedTodos.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true; // 'all'
  });

  return (
    <TodoItemsContext.Provider
      value={{
        todos,
        addTodo,
        deleteTodo,
        toggleComplete,
        editTodo,
        filteredTodos,
        filter,
        setFilter,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};
