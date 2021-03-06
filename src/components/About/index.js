import React, { Component } from "react";
import JuanLemosProfileImage from "assets/images/juanLemosProfileImage.png";
import CVpdf from "assets/JUAN_LEMOS_CV.pdf";
import { Link } from "react-scroll";
import { formatTextWithNewLines } from "utils/stringUtils";
import { ParallaxBanner, Parallax } from "react-scroll-parallax";
import {
  ProfileImage,
  Wrapper,
  TextContainer,
  HiJuanLemos,
  Button
} from "./styles";

export default class Home extends Component {
  render() {
    const a0 = "0%";
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
            styleOuter={{ marginTop: "70px" }}
          >
            <ProfileImage
              src={JuanLemosProfileImage}
              alt={"Juan Lemos profile image"}
            />
          </Parallax>
          <HiJuanLemos>Hi! I'm Juan Lemos</HiJuanLemos>
          <TextContainer>
            {formatTextWithNewLines(`
            I'm a Computer Engineer, passionate about understanding problems and creating solutions.
            I want to help you to improve your business with software. By working together we can find the best solution to accomplish your business goals. Building a solution is a process where several interests should be aligned; that's why I believe in the importance of teamwork.`)}
          </TextContainer>

          <Link
            className={"MenuContainer"}
            to="Contact"
            smooth={true}
            duration={700}
          >
            <Button style={{ background: "#e4e4e4", marginBottom: "18px" }}>
              {"Let's talk!"}
            </Button>
          </Link>
          <Button
            style={{ marginBottom: "18px" }}
            onClick={() => window.open(CVpdf, "CV Juan Lemos")}
          >
            {"Download resume"}
          </Button>
        </Wrapper>
      </ParallaxBanner>
    );
  }
}
