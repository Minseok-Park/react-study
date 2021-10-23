import { useState, useReducer, useCallback } from "react";

function reducer(state, action) {
  //CHANGE
  //RESET
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        [action.name]: [action.value],
      };
    case "RESET_INPUT":
      return Object.keys(state).reduce((acc, current) => {
        acc[current] = "";
        return acc;
      }, {});
    default:
      return state;
  }
}

function useInputs(initialForm) {
  const [form, dispatch] = useReducer(reducer, initialForm);

  const onChange = useCallback((event) => {
    const { name, value } = event.target;
    dispatch({
      type: "CHANGE_INPUT",
      name,
      value,
    });
  }, []);

  const reset = useCallback(() => {
    dispatch({
      type: "RESET_INPUT",
    });
  }, []);

  return [form, onChange, reset];
}

export default useInputs;
