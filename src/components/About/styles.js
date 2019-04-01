import styled from "styled-components";
import { fonts } from "assets/fonts";

export const ProfileImage = styled.img`
  border-radius: 50%;
  width: 100%;
`;

export const Wrapper = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TextContainer = styled.div`
  margin-top: 40px;
  color: white;
  max-width: 750px;
  font-family: ${fonts.longTexts};
  line-height: 1.4;
  margin-left: 12px;
  margin-right: 12px;
  margin-bottom: 60px;
`;