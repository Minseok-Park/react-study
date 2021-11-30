import React from "react";
import { Route, Link } from "react-router-dom";
import About from "./components/About";
import HistorySample from "./components/HistorySample";
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
        <li>
          <Link to="/history">예제</Link>
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
      <Route path="/history">
        <HistorySample />
      </Route>
    </div>
  );
}

export default App;
