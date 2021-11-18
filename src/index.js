import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import ReduxProvider from "./store/ReduxProvider";

ReactDOM.render(
    <BrowserRouter>
    <ReduxProvider>
      <App />
    </ReduxProvider>
    </BrowserRouter>,
  document.getElementById("root")
);
