import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import "../styles/Todobox.css";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, toggleTodo } from "./redux/redux toolkit/todoSlice";
function Todobox({ todoitem }) {
  const todo = useSelector((state) => state.todolist.todolist);
  const dispatch = useDispatch();
  const removeTodos = () => {
    dispatch(removeTodo(todoitem.id));
  };
  const checkTodos = () => {
    dispatch(toggleTodo(todoitem.id));
  };
  return (
    <>
      {todo.length && (
        <div className="container--todobox">
          <p
            className={
              !todoitem.done
                ? "todobox todo__text"
                : "todo__text text__completed"
            }
          >
            {todoitem.title}
          </p>

          <div className="todobox todo-buttons">
            <button
              className={
                !todoitem.done
                  ? "todobox todo__completed"
                  : "todobox todo__completed todo__checked"
              }
              onClick={checkTodos}
            >
              <CheckIcon className="todobox icon__completed"></CheckIcon>
            </button>
            <button className="todobox todo__delete" onClick={removeTodos}>
              <DeleteIcon className="todobox icon__delete"></DeleteIcon>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Todobox;
