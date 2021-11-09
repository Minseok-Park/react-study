import { shallowEqual, useSelector } from "react-redux";
import TodoList from "../components/todoList";

function TodoListContainer() {
  const { todos } = useSelector(
    (state) => ({
      todos: state.todos,
    }),
    shallowEqual
  );

  return <TodoList todos={todos} />;
}

export default TodoListContainer;
