import React from "react";
import { useState } from "react";
import { useDispatch} from "react-redux";
import "../styles/Addtodo.css";
import { addTodo } from "./redux/redux toolkit/todoSlice";
function Addtodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const addTodos = () => {
    if (input !== "") {
      dispatch(addTodo({ id: Date.now(), title: input, done: false }));
      setInput("");
    }
  };
  return (
    <>
      <div className="container--addtodo">
        <p className="addtodo__title">Just do it.</p>
        <div className="container__todo-create">
          <input
            className="addtodo__input"
            placeholder="Add a task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.code === "Enter" && addTodos()}
          />
          <button className="addtodo__button" onClick={addTodos}>
            I Got This!
          </button>
        </div>
      </div>
    </>
  );
}

export default Addtodo;
