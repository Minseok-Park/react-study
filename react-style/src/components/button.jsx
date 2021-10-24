import React from "react";
import classNames from "classnames";
import "./button.scss";

// size : large, medium, small
// color : blue, pink, gray
const Button = ({ children, size, color, outline, fullWidth }) => {
  return (
    <button
      className={classNames("button", size, color, {
        outline, // true, false
        fullWidth, // true, false
      })}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  size: "medium",
  color: "blue",
};

export default Button;
