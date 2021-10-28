import React from "react";
import { withRouter } from "react-router";

const LoginButton = withRouter((props) => {
  function login() {
    setTimeout(() => {
      props.history.push("/");
    }, 1000);
  }
  return <button onClick={login}>로그인 하기</button>;
});

export default LoginButton;
