import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoHead from "./components/todoHead";
import TodoList from "./components/todoList";
import TodoTemplate from "./components/todoTemplate";

const GlobalStyle = createGlobalStyle`
  body {
    background : #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
      </TodoTemplate>
    </>
  );
}

export default App;
