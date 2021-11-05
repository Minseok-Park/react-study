import { useSelector } from "react-redux";
import TodoList from "../components/todoList";

function TodoListContainer() {
  const todos = useSelector((state) => state.todos);

  return <TodoList todos={todos} />;
}

export default TodoListContainer;
