import React from "react";

const CheckBox = ({ checked, children }) => {
  return (
    <div>
      <label>
        <input type="checkbox" />
        <div>{checked ? "체크됨" : "체크 안됨"}</div>
      </label>
      <span>{children}</span>
    </div>
  );
};

export default CheckBox;
