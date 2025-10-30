import Heading from "./components/Heading";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  const [todos, setTodos] = useState([
    // {
    //   id: 1,
    //   itemName: "Buy Milk",
    //   dueDate: "2025-02-20",
    //   completed: false,
    // },
    // {
    //   id: 2,
    //   itemName: "Go to College",
    //   dueDate: "2025-06-23",
    //   completed: false,
    // },
    // {
    //   id: 3,
    //   itemName: "Complete course",
    //   dueDate: "2025-07-23",
    //   completed: false,
    // },
  ]);

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
    <TodoItemsContext.Provider value={{todos, addTodo, deleteTodo, toggleComplete, editTodo, filteredTodos}}>
      <Heading />
      <AddTodo buttonText="Add" />

      {/* Filter Buttons */}
      <div className="container text-center my-3">
        <div className="btn-group" role="group">
          <button
            className={`btn btn-outline-primary ${
              filter === "all" ? "active" : ""
            }`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`btn btn-outline-success ${
              filter === "active" ? "active" : ""
            }`}
            onClick={() => setFilter("active")}
          >
            Active
          </button>
          <button
            className={`btn btn-outline-secondary ${
              filter === "completed" ? "active" : ""
            }`}
            onClick={() => setFilter("completed")}
          >
            Completed
          </button>
        </div>
      </div>

      <WelcomeMessage />

      <TodoItem
        buttonText="Delete"
      />
    </TodoItemsContext.Provider>
  );
}

export default App;
