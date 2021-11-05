import "./App.css";
import TodoFormContainer from "./containers/TodoFormContainer";
import TodoListContainer from "./containers/TodoListContainer";

function App() {
  return (
    <div>
      <TodoFormContainer />
      <TodoListContainer />
    </div>
  );
}

export default App;
