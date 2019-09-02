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
  justify-content: flex-start;
  position: relative;
`;

export const HiJuanLemos = styled.div`
  margin-top: 40px;
  /* font-family: ${fonts.longTexts}; */
  color: white;
  font-weight: 600;
  font-size: 24px;
`;

export const TextContainer = styled.div`
  margin-top: 12px;
  color: white;
  max-width: 750px;
  font-family: ${fonts.longTexts};
  line-height: 1.6;
  margin-left: 12px;
  margin-right: 12px;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px;
  background: white;
  border-radius: 43px;
  color: black;
  font-family: ${fonts.longTexts};
  cursor: pointer;
`;
