import React, { Component } from "react";

class ControlledComponent extends Component {
  state = {
    value: "",
  };
  render() {
    const { value } = this.state;
    return (
      <div>
        <input type="text" value={value} onChange={this.change} />
        <button onClick={this.click}>전송</button>
      </div>
    );
  }

  change = (event) => {
    const { value } = event.target;
    this.setState({ value });
  };
}

export default ControlledComponent;
