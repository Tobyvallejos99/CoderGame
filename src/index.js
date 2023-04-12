import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import  Store  from "./Redux/store/store";
import { Provider } from "react-redux";
import { BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <Provider store={Store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);