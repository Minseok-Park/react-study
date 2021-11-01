import React, { Component } from "react";

class UnControlledComponent extends Component {
  inputRef = React.createRef();

  render() {
    return (
      <div>
        <input ref={this.inputRef} type="text" />
        <button onClick={this.click}>전송</button>
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount", this.inputRef);
  }

  click = () => {
    // input 엘리먼트의 현재 상태 값 (value) 를 꺼내서
    // 전송한다.
    // const input = document.querySelector("#my-input");
    // console.log(input);

    console.log(this.inputRef.current.value);
  };
}

export default UnControlledComponent;
