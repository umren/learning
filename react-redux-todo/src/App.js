import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./components/TodoList";
import { createStore } from "redux";
import { Provider } from "react-redux";
import todos from "./reducers";

const store = createStore(todos);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <TodoList />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
