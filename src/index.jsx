import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./GlobalCss.css";

import Store from "./Store";

import MainApp from "./Containers/MainApp";

ReactDOM.render(
  <Provider store={Store}>
    <MainApp />
  </Provider>,
  document.getElementById("root")
);
