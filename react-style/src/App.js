import "./app.scss";
import Button from "./components/button";

function App() {
  return (
    <div className="App">
      <div className="buttons">
        <Button size="large">Button</Button>
        <Button size="medium">Button</Button>
        <Button size="small">Button</Button>
      </div>
    </div>
  );
}

export default App;
