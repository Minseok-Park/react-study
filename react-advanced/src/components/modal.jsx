import ReactDom from "react-dom";

const Modal = ({ children }) =>
  ReactDom.createPortal(children, document.querySelector("#modal"));

export default Modal;
