import React from "react";
import { Route, Link } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Profiles from "./components/Profiles";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필 목록</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" exact component={Home} />
      <Route path="/about">
        <About />
      </Route>
      <Route path="/profiles">
        <Profiles />
      </Route>
    </div>
  );
}

export default App;
