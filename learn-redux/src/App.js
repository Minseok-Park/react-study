import "./App.css";
import TodoFormContainer from "./containers/TodoFormContainer";
import TodoListContainer from "./containers/TodoListContainer";
import UserListContainer from "./containers/UserListContainer";

function App() {
  return (
    <div>
      <TodoFormContainer />
      <TodoListContainer />
      <UserListContainer />
    </div>
  );
}

export default App;
