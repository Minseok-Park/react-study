import React, { useContext, memo } from "react";
import { UserDispatch } from "../app";

const User = memo(({ user }) => {
  const { username, email, id, active } = user;

  const dispatch = useContext(UserDispatch);

  return (
    <div>
      <b
        onClick={() =>
          dispatch({
            type: "TOGGLE_USER",
            id: user.id,
          })
        }
        style={{ color: active ? "green" : "black", cursor: "pointer" }}
      >
        {username}
      </b>
      &nbsp;
      <span>({email})</span>
      <button
        onClick={() =>
          dispatch({
            type: "REMOVE_USER",
            id: user.id,
          })
        }
      >
        삭제
      </button>
    </div>
  );
});

const UserList = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
};

export default memo(UserList);
