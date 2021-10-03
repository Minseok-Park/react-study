import React, { useRef, useState } from "react";
import "./app.css";
import CreateUser from "./components/CreateUser";
import UserList from "./components/userList";

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });

  const { username, email } = inputs;
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "mark",
      email: "mark@gmail.com",
    },
    {
      id: 2,
      username: "luna",
      email: "luna@gmail.com",
    },
    {
      id: 3,
      username: "sam",
      email: "sam@gmail.com",
    },
  ]);

  const nextId = useRef(4);

  const onChange = (event) => {
    const { name, value } = event.target;
    setInputs((inputs) => ({
      ...inputs,
      [name]: value,
    }));
  };

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers((users) => [...users, user]);
    setInputs((inputs) => ({
      username: "",
      email: "",
    }));

    nextId.current += 1;
  };

  const onRemove = (userId) => {
    setUsers((users) => users.filter((user) => user.id !== userId));
  };

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} />
    </>
  );
}

export default App;
