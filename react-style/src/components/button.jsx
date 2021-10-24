import React from "react";
import classNames from "classnames";
import "./button.scss";

// size : large, medium, small
const Button = ({ children, size }) => {
  return <button className={classNames("button", size)}>{children}</button>;
};

Button.defaultProps = {
  size: "medium",
};

export default Button;
