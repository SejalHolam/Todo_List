import Heading from "./components/Heading";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useContext } from "react";
import { TodoItemsContext } from "./store/TodoItemsContextProvider";
import { TodoItemsContextProvider } from "./store/TodoItemsContextProvider";

function FilterButtons() {
  const { filter, setFilter } = useContext(TodoItemsContext);

  return (
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
  );
}

function App() {
  return (
    <TodoItemsContextProvider>
      <Heading />
      <AddTodo buttonText="Add" />
      <FilterButtons />
      <WelcomeMessage />
      <TodoItem buttonText="Delete" />
    </TodoItemsContextProvider>
  );
}

export default App;
