import "./App.css";
import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";
import useReduxDispatch from "./hooks/useReduxDispatch";
import { addTodo } from "./redux/action";

function App() {
  const dispatch = useReduxDispatch();

  function click() {
    dispatch(addTodo("todo"));
  }

  return (
    <div>
      <button onClick={click}>추가</button>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
