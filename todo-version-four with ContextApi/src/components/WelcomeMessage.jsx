import { useContext } from "react";
import "./WelcomeMessage.css";
import {useTodoItems } from "../store/TodoItemsContextProvider";

const WelcomeMessage = () => {
  const { todos } = useTodoItems();

  return todos.length === 0 && <p className="welcome">Enjoy Your Day</p>;
};

export default WelcomeMessage;
