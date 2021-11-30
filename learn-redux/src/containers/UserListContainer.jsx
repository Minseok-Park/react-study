import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import UserList from "../components/userList";
import { getUsersThunk } from "../redux/modules/users";

const UserListContainer = (props) => {
  const users = useSelector((state) => state.users.data);
  const dispatch = useDispatch();

  //   const getUsers = useCallback(async () => {
  //     dispatch(getUsersStart());
  //     try {
  //       const res = await axios.get("https://api.github.com/users");
  //       dispatch(getUsersSuccess(res.data));
  //     } catch (error) {
  //       dispatch(getUsersFail(error));
  //     }
  //   }, [dispatch]);

  const getUsers = useCallback(() => {
    dispatch(getUsersThunk());
  }, [dispatch]);

  return <UserList users={users} getUsers={getUsers} />;
};

export default UserListContainer;
