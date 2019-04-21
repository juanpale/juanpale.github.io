import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
`;

export const OuterWraper = styled.div`
  .parallax-banner-layer-0 {
    transition: background-image 0.8s !important;
  }
`;

export const HeaderTitleWrapper = styled.div`
  color: white;
  font-weight: 600;
  font-size: 30px;
  text-shadow: #00000094 1px 0 8px;
  p {
    margin-top: 0px;
  }
  p:nth-child(2) {
    font-size: 52px;
  }
`;
