import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import About from "./component/about";
import Home from "./component/home";
import Profile from "./component/profile";
import NotFound from "./component/notFound";
import Links from "./component/links";
import NavLinks from "./component/navLinks";
import Login from "./component/login";

const isLogin = false;

function App() {
  return (
    <BrowserRouter>
      <Links />
      <NavLinks />
      <Switch>
        <Route
          path="/login"
          render={() => (isLogin ? <Redirect to="/" /> : <Login />)}
        />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/profile" component={Profile} />
        <Route path="/about" component={About} />
        <Route path="/" component={Home} exact />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
