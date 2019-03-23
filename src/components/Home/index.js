import React, { Component } from "react";
import image from "assets/image.jpg";
import { HeaderTitleWrapper } from "./styles";
import { ParallaxBanner } from "react-scroll-parallax";

export default class Home extends Component {
  render() {
    return (
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
    );
  }
}
