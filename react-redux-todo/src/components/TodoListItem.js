import React, { Component } from "react";

export default class TodoListItem extends Component {
  render() {
    return <div>{this.props.value}</div>;
  }
}
