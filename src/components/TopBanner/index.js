import React, { Component } from "react";
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
          <MenuContainer>{"Home"}</MenuContainer>
          <MenuContainer>{"About"}</MenuContainer>
          <MenuContainer>{"Contact"}</MenuContainer>
          <MenuContainer>{"Feed"}</MenuContainer>
        </RightMenusWrapper>
      </Wrapper>
    );
  }
}
