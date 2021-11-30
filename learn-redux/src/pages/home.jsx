import { push } from "connected-react-router";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Home = (props) => {
  const dispatch = useDispatch();
  function click() {
    dispatch(push("/todos"));
  }

  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to="/todos">Todos</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
      <button onClick={click}>todos로 이동</button>
    </div>
  );
};

export default Home;
