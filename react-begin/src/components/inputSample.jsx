import React from "react";
import { useState } from "react/cjs/react.development";

const InputSample = (props) => {
  const [text, setText] = useState("");

  const onChange = (event) => {
    setText((text) => event.target.value);
  };

  const onReset = () => {
    setText("");
  };

  return (
    <div>
      {/*value에 값을 넣어줘야 초기화가 된다*/}
      <input type="text" onChange={onChange} value={text} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값 : </b>
        {text}
      </div>
    </div>
  );
};

export default InputSample;
