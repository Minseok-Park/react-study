import { Router, Route } from "react-router-dom";
import Home from "./pages/home";
import Todos from "./pages/Todos";
import Users from "./pages/Users";
import history from "./history";
import { ConnectedRouter } from "connected-react-router";

function App() {
  return (
    <ConnectedRouter history={history}>
      <Route path="/" exact component={Home} />
      <Route paht="/todos" component={Todos} exact />
      <Route path="/users" component={Users} exact />
    </ConnectedRouter>
  );
}

export default App;
