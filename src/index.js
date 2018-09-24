import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppList from "./app-container";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
//import store from "./configureStore";
import "bootstrap/dist/css/bootstrap.css";

import { createStore } from "redux";
import { rootReducer } from "./rootReducer";

//console.log("rootReducer :: ", rootReducer);
const store = createStore(rootReducer);

//console.log("configure-store :: ", store.getState());
//export default store;

ReactDOM.render(
  <Provider store={store}>
    <AppList />
  </Provider>,
  document.getElementById("app")
);
registerServiceWorker();
window.store = store;
