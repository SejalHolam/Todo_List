import Heading from "./components/Heading";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import "./App.css";

function App() {
  return (
    <>
      <Heading />
      <AddTodo />
      <TodoItem item="Buy Milk" date="21/12/2000" />
      <TodoItem item="Go to College" date="23/08/2023" />
    </>
  );
}

export default App;
