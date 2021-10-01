import React from "react";

function Child({ children }) {
  const style = {
    border: "2px solid black",
    padding: 16,
  };
  // children props => 태그 사이의 내용들을 보여줄 때 사용
  return <div style={style}>{children}</div>;
}

export default Child;
