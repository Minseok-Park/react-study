import React from "react";
import styled from "styled-components";
import TodoItem from "./todoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 1.3rem 2rem;
  padding-bottom: 3rem;
  overflow-y: auto;
`;

const TodoList = (props) => {
  return (
    <TodoListBlock>
      <TodoItem text="프로젝트 생성하기" done />
      <TodoItem text="컴포넌트 스타일링 하기" done />
      <TodoItem text="Context 만들기" done={false} />
      <TodoItem text="기능 구현하기" done={false} />
    </TodoListBlock>
  );
};

export default TodoList;
