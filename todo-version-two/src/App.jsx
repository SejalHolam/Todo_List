import Heading from "./components/Heading";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import "./App.css";

function App() {
  const todoList = [
    {
      id: 1,
      itemName: "Buy Milk",
      dueDate: "23/08/2025",
    },
    {
      id: 2,
      itemName: "Go to College",
      dueDate: "23/08/2025",
    },
    {
      id: 3,
      itemName: "Complete course",
      dueDate: "23/08/2025",
    },
  ];
  return (
    <>
      <Heading />
      <AddTodo />
      <TodoItem todoitems={todoList} />
    </>
  );
}

export default App;
