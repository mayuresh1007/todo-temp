import { Children, useContext, useState } from "react";
import { TodoContext } from "./TodoContext";

const TodoState = ({ children }) => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      label: "hi",
      checked: false,
    },
  ]);

  const uddateCheck = (id) => {
    const updated = todos.map((todo) => {
      if (todo.id === id) {
        console.log(todo);
        return { ...todo, checked: !todo.checked };
      }
      return todo;
    });
    // console.log(updated);
    setTodos(updated);
    // setEditingTodo(true)
  };

  const { EditingTodo, setEditingTodo } = useState(false);
  return (
    <TodoContext.Provider value={{ todos, setTodos, uddateCheck }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoState;
