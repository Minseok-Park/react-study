import React from "react";
import styled from "styled-components";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 1.3rem 2rem;
  padding-bottom: 3rem;
  overflow-y: auto;
`;

const TodoList = (props) => {
  return <TodoListBlock>TodoList</TodoListBlock>;
};

export default TodoList;
