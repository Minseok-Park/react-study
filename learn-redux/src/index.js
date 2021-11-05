import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import "./exercise";
// import { createStore } from "redux";
// import rootReducer from "./modules";
// // yarn add redux-devtools-extension => redux 개발자 도구 활용
// import { composeWithDevTools } from "redux-devtools-extension";

// const store = createStore(rootReducer, composeWithDevTools());
import store from "./redux/store";
import ReduxContext from "./contexts/reduxContext";
// import { addTodo, completeTodo, showComplete } from "./redux/action";

// state가 변경될 때마다 호출
// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch(addTodo("할 일"));
// store.dispatch(completeTodo(0));
// store.dispatch(showComplete());

ReactDOM.render(
  <React.StrictMode>
    <ReduxContext.Provider value={store}>
      <App />
    </ReduxContext.Provider>
  </React.StrictMode>,

  document.getElementById("root")
);
