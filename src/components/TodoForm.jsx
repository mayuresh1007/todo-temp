import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoForm = () => {
  const { todos, setTodos } = useContext(TodoContext);
  const [text, setText] = useState("");
  // console.log(todos);

  const handleChange = (e) => setText(e.target.value);

 
  const AddTodo = () => {
    const newTodo = {
      id: todos.length + 1,
      label: text,
      checked: false,
    };
    setTodos([...todos, newTodo]);
    setText('')
  };
  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <button
        onClick={() => {
          AddTodo();
        }}
      >
        Add
      </button>
    </div>
  );
};

export default TodoForm;
