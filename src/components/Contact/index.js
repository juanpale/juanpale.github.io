import React, { Component } from "react";
import contact from "assets/contact.jpg";
import MailIcon from "assets/MailIcon";
import LinkedinIcon from "assets/LinkedinIcon";
import { Wrapper } from "./styles";
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
            amount: 0.2,
            expandend: true
          }
        ]}
      >
        <Wrapper>
          <MailIcon color={"white"} />
          <LinkedinIcon color={"white"} />
        </Wrapper>
      </ParallaxBanner>
    );
  }
}
