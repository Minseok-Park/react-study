import React, {
  useRef,
  useReducer,
  useCallback,
  useMemo,
  createContext,
} from "react";
import "./app.css";
import UserList from "./components/userList";
import CreateUser from "./components/CreateUser";
import useInputs from "./components/useInputs";

function countActiveUsers(users) {
  console.log("활성 사용자 수를 세는 중...");
  return users.filter((user) => user.active).length;
}

const initialState = {
  users: [
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
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case "CREATE_USER":
      return {
        inputs: initialState.inputs,
        users: [...state.users, action.user],
      };
    case "TOGGLE_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, active: !user.active } : user
        ),
      };
    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };

    default:
      throw new Error(`Unhandled action`);
  }
}

export const UserDispatch = createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser />
      <UserList users={users} />
      <div>활성 사용자 수 : {count}</div>
    </UserDispatch.Provider>
  );
}

export default App;
