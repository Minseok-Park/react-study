import React from "react";
import { createGlobalStyle } from "styled-components";
import { TodoProvider } from "./components/todoContext";
import TodoCreate from "./components/todoCreate";
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
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
