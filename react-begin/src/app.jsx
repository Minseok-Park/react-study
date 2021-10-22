import React, { useRef, useState, useCallback } from "react";
import "./app.css";
import UserList from "./components/userList";
import CreateUser from "./components/CreateUser";

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });

  const { username, email } = inputs;

  const onChange = useCallback(
    (event) => {
      const { name, value } = event.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs]
  );

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "first",
      email: "first@naver.com",
      active: true,
    },
    {
      id: 2,
      username: "second",
      email: "second@naver.com",
      active: false,
    },
    {
      id: 3,
      username: "third",
      email: "third@naver.com",
      active: false,
    },
  ]);

  const nextId = useRef(4);

  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers((users) => [...users, user]);
    nextId.current += 1;
    setInputs({
      username: "",
      email: "",
    });
  }, [username, email]);

  const onRemove = useCallback((userId) => {
    setUsers((users) => users.filter((user) => user.id !== userId));
  }, []);

  const onToggle = useCallback((userId) => {
    setUsers((users) =>
      users.map((user) =>
        user.id === userId ? { ...user, active: !user.active } : user
      )
    );
  }, []);

  return (
    <div>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </div>
  );
}

export default App;
