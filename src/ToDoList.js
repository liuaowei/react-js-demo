import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import { Button, Input } from "antd";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="todo-list">
      <h1>ToDo List</h1>
      <div className="todo-list-area">
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="添加一个新的任务"
          className="todo-list-input"
        />
        <Button type="primary" onClick={addTask}>
          添加
        </Button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <ToDoItem
            key={index}
            task={task}
            onDelete={() => deleteTask(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
