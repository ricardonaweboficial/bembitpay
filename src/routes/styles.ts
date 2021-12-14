import styled, { keyframes, css } from "styled-components";

export const HeaderContainer = styled.div`
  flex: 1;
`;

export const Container = styled.div`
  background-color: white;
  flex: 9;
  position: relative;
`;

export const LoadingContainer = styled.div`
  background-color: rgba(35, 33, 64,0.95);
  position: absolute;
  height: 100%;
  width: 100%;
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  z-index:200;
  justify-content:center;
  align-items:center;
`;
