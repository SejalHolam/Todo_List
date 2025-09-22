import React from "react";
import "./TodoItem.css";

const TodoItem = ({ todoitems}) => {
  return (
    <div>
      {todoitems.map((item, id) => (
        <div className="container text-center" key={id}>
          <div className="row">
            <div className="col-6">{item.itemName}</div>
            <div className="col-4">{item.dueDate}</div>
            <div className="col-2">
              <button type="button" className="btn btn-danger">
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoItem;
