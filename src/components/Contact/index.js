import React, { Component } from "react";
import contact from "assets/images/contact.jpg";
import MailIcon from "assets/icons/MailIcon";
import GithubIcon from "assets/icons/GithubIcon";
import LinkedinIcon from "assets/icons/LinkedinIcon";
import MediumIcon from "assets/icons/MediumIcon";
import { Wrapper, IconWrapper, TextContainer } from "./styles";
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
          <IconWrapper
            href="mailto:juanlemoswork@gmail.com?Subject=Hi%20Juan!"
            style={{ marginTop: "70px" }}
          >
            <MailIcon color={"white"} size={80} />
            <TextContainer>{"juanlemoswork@gmail.com"}</TextContainer>
          </IconWrapper>
          <IconWrapper href="https://www.linkedin.com/in/juan-lemos/">
            <LinkedinIcon color={"white"} size={80} />
            <TextContainer>{"linkedin.com/in/juan-lemos/"}</TextContainer>
          </IconWrapper>
          <IconWrapper href="https://github.com/juanpale">
            <GithubIcon color={"white"} size={90} />
            <TextContainer>{"github.com/juanpale"}</TextContainer>
          </IconWrapper>
          <IconWrapper href="https://medium.com/@juanlemos">
            <MediumIcon color={"white"} size={90} />
            <TextContainer>{"medium.com/@juanlemos"}</TextContainer>
          </IconWrapper>
        </Wrapper>
      </ParallaxBanner>
    );
  }
}
