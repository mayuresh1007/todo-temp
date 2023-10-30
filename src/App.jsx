import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import EditTodo from "./components/EditTodo";
import TodoState from "./context/Todostate";

function App() {
  return (
    <TodoState>
      <TodoList />
      <TodoForm />
    </TodoState>
  );
}

export default App;
