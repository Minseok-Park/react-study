import React from "react";
import { useState } from "react/cjs/react.development";

const InputSample = (props) => {
  const [info, setInfo] = useState({
    name: "",
    nickname: "",
  });

  const { name, nickname } = info;

  const onChange = (event) => {
    const { name, value } = event.target;
    setInfo((info) => ({
      ...info,
      [name]: value,
    }));
  };

  const onReset = () => {
    setInfo({
      name: "",
      nickname: "",
    });
  };

  return (
    <div>
      <input
        name="name"
        type="text"
        placeholder="이름"
        onChange={onChange}
        value={name}
      />
      <input
        name="nickname"
        type="text"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값 : </b> {name}({nickname})
      </div>
    </div>
  );
};

export default InputSample;
