import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Posts from "./components/Posts";
import PostForm from "./components/PostForm";

import store from "./store";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>Hello World Of Pain!</h1>
          <PostForm />
          <Posts />
        </div>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
