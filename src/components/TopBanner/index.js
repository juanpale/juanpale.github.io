import React, { Component } from "react";
import { Link } from "react-scroll";
import {
  Wrapper,
  PhotoContainer,
  NameContainer,
  LeftWrapper,
  MenuContainer,
  RightMenusWrapper
} from "./styles";
import JuanLemosProfileImage from "assets/juanLemosProfileImage.png";

export default class TopBanner extends Component {
  render() {
    return (
      <Wrapper withBackground={this.props.topBannerWithBackground}>
        <LeftWrapper>
          <PhotoContainer src={JuanLemosProfileImage} alt={"Juan Lemos"} />
          <NameContainer> {"Juan Lemos"}</NameContainer>
        </LeftWrapper>
        <RightMenusWrapper>
          <Link
            className={"MenuContainer"}
            to="Home"
            smooth={true}
            duration={700}
          >
            {"Home"}
          </Link>
          <Link
            className={"MenuContainer"}
            to="About"
            smooth={true}
            duration={700}
          >
            {"About"}
          </Link>
          <Link
            className={"MenuContainer"}
            to="Contact"
            smooth={true}
            duration={700}
          >
            {"Contact"}
          </Link>
          {/* <MenuContainer>{"Feed"}</MenuContainer> */}
        </RightMenusWrapper>
      </Wrapper>
    );
  }
}
