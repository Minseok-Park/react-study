import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Counter from "../components/counter";
import { decrease, increase } from "../modules/counter";

const CounterContainer = (props) => {
  const number = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CounterContainer;
