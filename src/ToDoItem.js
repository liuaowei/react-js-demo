import { Button } from "antd";
import React from "react";

function ToDoItem({ task, onDelete }) {
  return (
    <li className="todo-list-item">
      <span>{task}</span>
      <Button onClick={onDelete}>删除</Button>
    </li>
  );
}

export default ToDoItem;
