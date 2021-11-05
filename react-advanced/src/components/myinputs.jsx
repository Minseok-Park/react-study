import React, { forwardRef } from "react";

const Myinputs = forwardRef((props, ref) => {
  return (
    <div>
      <p>MyInput</p>
      <input ref={ref} />
    </div>
  );
});

export default Myinputs;
