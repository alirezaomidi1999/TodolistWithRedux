import React from "react";
import { useSelector } from "react-redux";
import "../assets/Todos.css";
import Todobox from "./Todobox";

function Todos() {
  const todos = useSelector((state) => state.todolist.todolist);
  return (
    <div className="container--todos">
      {todos.map((todoitem) => (
        <Todobox key={todoitem.id} todoitem={todoitem} />
      ))}
    </div>
  );
}

export default Todos;
