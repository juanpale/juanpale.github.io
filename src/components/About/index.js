import React, { Component } from "react";
import JuanLemosProfileImage from "assets/images/juanLemosProfileImage.png";
import { ProfileImage, Wrapper, TextContainer, HiJuanLemos } from "./styles";
import { formatTextWithNewLines } from "util/stringUtils";
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
            {formatTextWithNewLines(`
            I'm a Computer Engineer, passionate about understanding and solving problems.
            And I want to help you to improve your business with software, working together we can find the best solution to accomplish your business goals. Build a solution is a process where several interests should be aligned, because of that I believe in the importance of teamwork.
            Let's talk!`)}
          </TextContainer>
        </Wrapper>
      </ParallaxBanner>
    );
  }
}
