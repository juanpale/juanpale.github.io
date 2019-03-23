import React, { Component } from "react";
import "./App.css";
import TopBanner from "./components/TopBanner";
import image from "./assets/image.jpg";
import { HeaderTitleWrapper } from "./styles";
import { ParallaxBanner } from "react-scroll-parallax";

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
            <ParallaxBanner
              style={{ height: "100vh" }}
              layers={[
                {
                  image: image,
                  amount: 0.2
                }
              ]}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  display: "flex",
                  flexFow: "row wrap",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <HeaderTitleWrapper>
                  {"Finding questions to resolve challenges"}
                </HeaderTitleWrapper>
              </div>
            </ParallaxBanner>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
