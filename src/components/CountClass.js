import React from "react";

class CountClass extends React.Component {
  state = {
    count: 0,
  };

  handleButtonClick = (num) => {
    this.setState({ count: this.state.count + num });
  };

  render() {
    return (
      <div>
        <h1>The current number is: {this.state.count}</h1>
        <button onClick={() => this.handleButtonClick(1)}>Add</button>
        <button onClick={() => this.handleButtonClick(-1)}>Subtract</button>
      </div>
    );
  }
}

export default CountClass;
