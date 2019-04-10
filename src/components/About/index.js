import React, { Component } from "react";
import JuanLemosProfileImage from "assets/juanLemosProfileImage.png";
import { ProfileImage, Wrapper, TextContainer, HiJuanLemos } from "./styles";
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
          <HiJuanLemos>Hi! I'm Juan Lemos</HiJuanLemos>
          <TextContainer>
            I'm a computer engineer, passionate about understanding and solving
            problems, to improve new business and existence ones. <br />
            Build a solution is process where several interests should be
            aligned, because of that I believe in the importance of teamwork,
            taking the other's opinions to create a better result.
          </TextContainer>
        </Wrapper>
      </ParallaxBanner>
    );
  }
}
