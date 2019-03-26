import React, { Component } from "react";
import contact from "assets/contact.jpg";
// import { ProfileImage, Wrapper, TextContainer } from "./styles";
import { ParallaxBanner, Parallax } from "react-scroll-parallax";

export default class Home extends Component {
  render() {
    return (
      <ParallaxBanner
        style={{
          minHeight: "100vh",
          background: "rgb(4, 7, 16)",
          height: "null"
        }}
        layers={[
          {
            image: contact,
            amount: 0.2
          }
        ]}
      >
        {/* <Wrapper> */}
        {/* <Parallax
            y={[a0, a1]}
            styleInner={{
              width: "180px",
              maxWidth: "45vw"
            }}
            styleOuter={{ marginTop: "80px" }}
          >
            <ProfileImage src={JuanLemosProfileImage} />
          </Parallax> */}
        {/* <TextContainer> */}
        Hi! I'm Juan Lemos. I'm passionate about understanding and resolving
        problems, like to suggesting new approaches. I believe in the importance
        of teamwork. I'm committed to what I propose. I consider myself a quick
        learner.
        {/* </TextContainer> */}
        {/* </Wrapper> */}
      </ParallaxBanner>
    );
  }
}
