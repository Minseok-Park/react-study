import React from "react";
import styled from "styled-components";
import { useTodoState } from "./todoContext";
import TodoItem from "./todoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 1.3rem 2rem;
  padding-bottom: 3rem;
  overflow-y: auto;
`;

const TodoList = (props) => {
  const todos = useTodoState();
  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          done={todo.done}
          text={todo.text}
        />
      ))}
    </TodoListBlock>
  );
};

export default TodoList;
