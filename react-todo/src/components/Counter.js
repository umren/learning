import React, { Component } from "react";

export default class Counter extends Component {
  render() {
    let el = "";

    if (this.props.counter > 0) {
      el = `${this.props.counter} items left`;
    }

    return <div>{el}</div>;
  }
}
