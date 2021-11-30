import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const HistorySample = () => {
  const history = useHistory();

  const goBack = () => history.goBack();
  const goHome = () => history.push("/");

  useEffect(() => {
    const unblock = history.block("정말 떠나실건가요?");

    return () => {
      unblock();
    };
  }, [history]);

  return (
    <div>
      <button onClick={goBack}>뒤로가기</button>
      <button onClick={goHome}>홈으로</button>
    </div>
  );
};

export default HistorySample;
