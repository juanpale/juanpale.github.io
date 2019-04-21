import React, { Component } from "react";
import handshake from "assets/originalSizeImage/handshake.jpg";
import { formatTextWithNewLines } from "utils/stringUtils";
import { HeaderTitleWrapper, Wrapper, OuterWraper } from "./styles";
import { ParallaxBanner } from "react-scroll-parallax";

export default class Home extends Component {
  render() {
    return (
      <OuterWraper>
        <ParallaxBanner
          style={{ height: "100vh" }}
          layers={[
            {
              image: handshake,
              amount: 0.3,
              expandend: true
            }
          ]}
        >
          <Wrapper>
            <HeaderTitleWrapper>
              {formatTextWithNewLines(`Enhance your online presence
Improve your business`)}
            </HeaderTitleWrapper>
          </Wrapper>
        </ParallaxBanner>
      </OuterWraper>
    );
  }
}
