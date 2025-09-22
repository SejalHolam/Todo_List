import React, { useState } from "react";
import "./TodoItem.css";

const TodoItem = ({ todoitems, deleteTodo, onToggle, buttonText, onEdit }) => {
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  const [editDate, setEditDate] = useState("");

  const startEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.itemName);
    setEditDate(todo.dueDate);
  };

  const handleEditSave = () => {
    if (editText.trim() === "" || editDate === "") return;
    onEdit(editId, editText, editDate);
    setEditId(null);
    setEditText("");
    setEditDate("");
  };

  return (
    <div className="container">
      {todoitems.map((item) => (
        <div className="todo-row" key={item.id}>
          <input
            type="checkbox"
            checked={item.completed}
            onChange={() => onToggle(item.id)}
            className="form-check-input me-2"
          />

          <div className={`todo-text ${item.completed ? "completed" : ""}`}>
            {editId === item.id ? (
              <input
                type="text"
                className="form-control"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
            ) : (
              item.itemName
            )}
          </div>

          <div className="todo-date">
            {editId === item.id ? (
              <input
                type="date"
                className="form-control"
                value={editDate}
                onChange={(e) => setEditDate(e.target.value)}
              />
            ) : (
              item.dueDate
            )}
          </div>

          <div className="todo-actions">
            {editId === item.id ? (
              <button className="btn btn-sm btn-primary" onClick={handleEditSave}>
                Save
              </button>
            ) : (
              <button
                className="btn btn-sm btn-warning"
                onClick={() => startEdit(item)}
              >
                Edit
              </button>
            )}
            <button
              className="btn btn-sm btn-danger"
              onClick={() => deleteTodo(item.id)}
            >
              {buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoItem;
