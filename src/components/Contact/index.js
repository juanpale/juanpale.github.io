import React, { Component } from "react";
import contact from "assets/images/contact.jpg";
import MailIcon from "assets/icons/MailIcon";
import LinkedinIcon from "assets/icons/LinkedinIcon";
import {
  Wrapper,
  IconWrapper,
  EmailIconWrapper,
  TextContainer
} from "./styles";
import { ParallaxBanner } from "react-scroll-parallax";

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
            amount: 0.3,
            expandend: true
          }
        ]}
      >
        <Wrapper>
          <EmailIconWrapper href="mailto:juanlemoswork@gmail.com?Subject=Hi%20Juan!">
            <MailIcon color={"white"} size={80} />
            <TextContainer>{"juanlemoswork@gmail.com"}</TextContainer>
          </EmailIconWrapper>
          <IconWrapper
            onClick={() =>
              (window.location.href = "https://www.linkedin.com/in/juan-lemos/")
            }
          >
            <LinkedinIcon color={"white"} size={80} />
            <TextContainer>{"linkedin.com/in/juan-lemos/"}</TextContainer>
          </IconWrapper>
        </Wrapper>
      </ParallaxBanner>
    );
  }
}
