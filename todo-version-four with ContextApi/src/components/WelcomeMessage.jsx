import { useContext } from "react";
import  "./WelcomeMessage.css";
import { TodoItemsContext } from "../store/todo-items-store";

const WelcomeMessage = () => {

  const {todos}= useContext(TodoItemsContext);

  return (
    todos.length === 0 && <p className='welcome'>Enjoy Your Day</p>
  );
};

export default WelcomeMessage;