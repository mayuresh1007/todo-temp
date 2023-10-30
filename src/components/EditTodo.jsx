import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const EditTodo = ({ todo }) => {
  const { setTodos } = useContext(TodoContext);
  const [updatedText, setUpdatedText] = useState("");

  useEffect(() => {
    handleSubmit(todo)
  }, []);
  const handleSubmit = (todo) => {
    setTodos({ ...todo, label: updatedText });
  };
  return (
    <div>
      {/* {todos.map((todo) => ( */}
      <form onSubmit={()=>handleSubmit(todo)} key={todo.id}>
        <input
          type="text"
          value={updatedText}
          onChange={(e) => setUpdatedText(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {/* ))} */}
    </div>
  );
};

export default EditTodo;
