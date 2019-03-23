import React, { Component } from "react";
import "./App.css";
import image from "./image.jpg";
import { ParallaxBanner } from "react-scroll-parallax";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="vertical">
          <div
            // className={styles.bannerContainer}
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center"
            }}
          >
            <ParallaxBanner
              // className={styles.bannerBg}
              layers={[
                {
                  image:
                    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner.jpg",
                  amount: 0.2
                }
              ]}
            >
              <div
                // className={styles.parallaxChildren}
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
                <h1>Headline Text</h1>
              </div>
            </ParallaxBanner>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
