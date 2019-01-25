import React, { Component } from "react";

import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Postform from "./components/Postform";
import Posts from "./components/Posts";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <header>
            <Postform />
            <hr />
            <Posts />
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
