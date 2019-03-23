import React, { Component } from "react";
import "./App.css";
import TopBanner from "./components/TopBanner";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="vertical">
          <TopBanner />
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center"
            }}
          >
            <Home />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
