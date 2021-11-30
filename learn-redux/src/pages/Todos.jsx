import React from "react";
import TodoFormContainer from "../containers/TodoFormContainer";
import TodoListContainer from "../containers/TodoListContainer";

const Todos = (props) => {
  return (
    <div>
      <TodoFormContainer />
      <TodoListContainer />
    </div>
  );
};

export default Todos;
