import React from "react";

const User = ({ user }) => {
  return (
    <div>
      <b>{user.username}</b> <span>{user.email}</span>
    </div>
  );
};

const UserList = (props) => {
  const users = [
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
  ];
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
};

export default UserList;
