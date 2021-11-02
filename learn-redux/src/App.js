import logo from "./logo.svg";
import "./App.css";
import CounterContainer from "./containers/counterContainer";
import TodoContainer from "./containers/todoContainer";

function App() {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodoContainer />
    </div>
  );
}

export default App;
