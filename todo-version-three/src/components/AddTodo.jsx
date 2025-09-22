import React from "react";
import "./AddTodo.css";
import { useState } from "react";

const AddTodo = ({ newTodo, buttonText }) => {
  const [item, setItem] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    // console.log("Item:", item);
    // console.log("DueDate:", dueDate);

    if (item.trim() === "" || dueDate === "") return;

    // Create a new todo object
    const todo = {
      id: Date.now(), // generates a unique id based on timestamp
      itemName: item,
      dueDate: dueDate,
      completed: false,
    };

    newTodo(todo);
    setItem("");
    setDueDate("");
  };

  return (
    <div>
      <div className="add-todo-container container text-center">
        <div className="row">
          <div className="col-md-6 mb-2">
            <input
              type="text"
              placeholder="Enter Todo Item"
              value={item}
              onChange={(e) => setItem(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="col-md-4 mb-2">
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="col-md-2 mb-2">
            <button
              type="button"
              className="btn btn-success w-100"
              onClick={handleClick}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
