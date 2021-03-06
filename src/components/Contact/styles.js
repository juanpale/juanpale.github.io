import styled from "styled-components";

export const Wrapper = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(1, 1, 1, 0.08);
  min-height: 100vh;
  position: relative;
`;

export const IconWrapper = styled.a`
  cursor: pointer;
  margin: 10px;
  text-decoration: none;
  background-color: none;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  color: white;
  font-weight: bold;
  align-items: center;
  font-size: 18px;
`;

export const TextContainer = styled.div`
  margin-top: 6px;
`;
