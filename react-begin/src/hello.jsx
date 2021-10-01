import React from "react";

function Hello({ color, name, isSpecial }) {
  return (
    <div style={{ color }}>
      {isSpecial && <b>*</b>} 안녕하세요 {name}
    </div>
  );
}

// props가 누락되었을 때 기본적으로 사용할 값!
Hello.defaultProps = {
  name: "이름없음",
};

export default Hello;
