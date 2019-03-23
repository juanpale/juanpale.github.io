import React from "react";
import {
  Wrapper,
  PhotoContainer,
  NameContainer,
  LeftWrapper,
  MenuContainer,
  RightMenusWrapper
} from "./styles";
import JuanLemosProfileImage from "assets/juanLemosProfileImage.png";

export default function TopBanner() {
  return (
    <Wrapper>
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
