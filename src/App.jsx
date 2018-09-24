import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import ConnectedCrudApp from "./crud-app/crud-app-container";

export default class App extends Component {
  render() {
    return (
      <div>
        hello app
        <div>
          <ConnectedCrudApp />
        </div>
      </div>
    );
  }
}
