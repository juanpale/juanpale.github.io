import React, { Component } from "react";
import image from "assets/image.jpg";
import { HeaderTitleWrapper, Wrapper } from "./styles";
import { ParallaxBanner } from "react-scroll-parallax";

export default class Home extends Component {
  render() {
    return (
      <ParallaxBanner
        style={{ height: "100vh" }}
        layers={[
          {
            image: image,
            amount: 0.3,
            expandend: true
          }
        ]}
      >
        <Wrapper>
          <HeaderTitleWrapper>
            {"Creating questions to resolve challenges"}
          </HeaderTitleWrapper>
        </Wrapper>
      </ParallaxBanner>
    );
  }
}
