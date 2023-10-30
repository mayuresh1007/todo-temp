import React, { useContext, useRef, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoList = () => {
  const { todos, setTodos,uddateCheck } = useContext(TodoContext);
  const { text, setText } = useState("");
 

  // console.log(todos);
  const handleDelete = (id) => {
    const deleted = todos.filter((todo) => todo.id !== id);
    setTodos(deleted);
  };

 

  return (
    <>
      <div style={{ display: "flex" }}>
        {todos?.map((todo) => {
          return (
            <div key={todo.id}>
              <ul style={{ display: "flex" }}>
                <input type="checkbox" onClick={() => uddateCheck(todo.id)} />
                <li style={{ listStyle: "none" }}>
                  <h3>{todo.label}</h3>
                </li>
                <button onClick={() => handleDelete(todo.id)}>x</button>
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TodoList;
