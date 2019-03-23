import styled from "styled-components";

export const Wrapper = styled.div`
  background: rgba(105, 108, 117, 0.3);
  width: 100%;
  position: fixed;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 55px;
`;

export const PhotoContainer = styled.img`
  border-radius: 50%;
  height: 40px;
  margin-left: 10px;
`;

export const NameContainer = styled.div`
  color: white;
  font-size: 20px;
  margin-left: 10px;
`;

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuContainer = styled.div`
  color: white;
  height: 100%;
  &:hover {
    background: rgba(256, 256, 256, 0.2);
    cursor: pointer;
  }
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

export const RightMenusWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
