import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./components/TodoList";

class App extends React.Component {
  render() {
    return <TodoList />;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
