import { useCallback } from "react";
import { useDispatch } from "react-redux";
import TodoForm from "../components/todoForm";
import { addTodo } from "../redux/action";

const TodoFormContainer = () => {
  const dispatch = useDispatch();
  const add = useCallback((text) => dispatch(addTodo(text)), [dispatch]);

  return <TodoForm add={add} />;
};
export default TodoFormContainer;
