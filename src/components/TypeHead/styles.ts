import styled from "styled-components";

import { device, size } from "../../styles/device";

export const Container = styled.div`
  position: relative;
`;

export const Content = styled.div`
  position: relative;
  border: 1px solid #ef9d1c;
  margin: 20px 0 20px 0;
  border-radius: 12px;
`;
export const Label = styled.div`
  position: absolute;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 20px;
  background-color: #1a1736;
  z-index: 10;
  top: 10px;
  left: 12px;
  color: #ffffff;
  padding: 0 2% 0 2%;
`;

export const Input = styled.input`
  border: none;
  background-color: #1a1736;
  border-radius: 12px;
  padding: 15px;
  &:focus {
    padding: 15px;
  }
  color: #ffffff;
`;

export const OptionContainer = styled.ul`
  position: absolute;
  z-index: 20;
  top: 80%;
  background: #1a1736;
  display: none;
  padding: 10px;
  width: 100%;
`;
export const OptionItem = styled.li`
  color: #ffffff;
  display: inline-block;
  &:nth-of-type(1n + 6) {
    display: none;
  }
`;
