import React, { useState } from "react";
import "./Todo.css";
import ShowTodo from "./ShowTodo";

function Todo() {
  const [task, setTask] = useState("");
  const [data, setData] = useState([]);

  const changeTask = (e) => {
    setTask(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    const newData = task;
    setData([...data, newData]);
    setTask("");
  };
  const deleteItem = (a) => {
    const finalData = data.filter((curEle, index) => {
      return index != a;
    });
    setData(finalData);
  };
  return (
    <div className="container">
      <div>
        <h1>Todo App</h1>
      </div>
      <form onSubmit={submitHandler}>
        <div className="row">
          <div>
            <input
              type="text"
              className="input_"
              value={task}
              onChange={changeTask}
            />
          </div>
          <button type="submit" className="sub_btn">
            Add task
          </button>
        </div>
      </form>
      {data.map((value, index) => {
        return (
          <ShowTodo key={index} id={index} task={value} onSelect={deleteItem} />
        );
      })}
    </div>
  );
}
export default Todo;
