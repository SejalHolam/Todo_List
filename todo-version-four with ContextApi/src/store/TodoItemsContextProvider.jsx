import { useState, useContext, useEffect } from "react";
import { createContext } from "react";

export const TodoItemsContext = createContext();

export const TodoItemsContextProvider = ({ children }) => {
  const getInitialTodos = () => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  };

  const [todos, setTodos] = useState(getInitialTodos);

  const [filter, setFilter] = useState("all"); // all, active, completed

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
    setTodos(updatedTodos);
  };

  const editTodo = (id, newName, newDueDate) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id
        ? { ...todo, itemName: newName, dueDate: newDueDate }
        : todo,
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

export const useTodoItems = () => {
  return useContext(TodoItemsContext);
};
