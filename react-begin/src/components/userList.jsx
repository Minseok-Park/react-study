import React, { useEffect, memo } from "react";

const User = memo(({ user, onRemove, onToggle }) => {
  const { username, email, id, active } = user;

  return (
    <div>
      <b
        onClick={() => onToggle(id)}
        style={{ color: active ? "green" : "black", cursor: "pointer" }}
      >
        {username}
      </b>
      &nbsp;
      <span>({email})</span>
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  );
});

const UserList = ({ users, onRemove, onToggle }) => {
  return (
    <div>
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default memo(UserList);
