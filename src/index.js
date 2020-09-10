import React from "react";
import ReactDOM from "react-dom";

import Add from "./components/add";
import Counter from "./components/counter";

import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { reducer as count } from "./ducks/count";

const store = createStore(
  combineReducers({
    count,
  })
);

ReactDOM.render(
  <Provider store={store}>
    <Add />
    <Counter />
  </Provider>,
  document.getElementById("root")
);
