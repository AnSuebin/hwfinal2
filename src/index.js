import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// 리덕스
// store 가져오기, provider로 뿌려주기
import store from "./redux/config/configStore";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
