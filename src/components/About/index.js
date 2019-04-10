import React, { Component } from "react";
import JuanLemosProfileImage from "assets/juanLemosProfileImage.png";
import { ProfileImage, Wrapper, TextContainer } from "./styles";
import { ParallaxBanner, Parallax } from "react-scroll-parallax";

export default class Home extends Component {
  render() {
    const a0 = "-70%";
    const a1 = "20%";
    return (
      <ParallaxBanner
        style={{
          minHeight: "100vh",
          height: "null"
        }}
        layers={[
          {
            amount: 0.2
          }
        ]}
      >
        <Wrapper>
          <Parallax
            y={[a0, a1]}
            styleInner={{
              width: "180px",
              maxWidth: "45vw"
            }}
            styleOuter={{ marginTop: "80px" }}
          >
            <ProfileImage
              src={JuanLemosProfileImage}
              alt={"Juan Lemos profile image"}
            />
          </Parallax>
          <TextContainer>
            Hi! I'm Juan Lemos. I'm passionate about understanding and resolving
            problems, like to suggesting new approaches. I believe in the
            importance of teamwork. I'm committed to what I propose. I consider
            myself a quick learner.
          </TextContainer>
        </Wrapper>
      </ParallaxBanner>
    );
  }
}
