import styled from "styled-components";

import { device, size } from "../../styles/device";

export const Container = styled.div`
  width: 100%;
`;

export const Button = styled.button`
  justify-content: center;
  padding: 15px 50px;
  background: ${(props) => props.theme.color.orange};
  border-radius: 3px;
  color: #FFFFFF;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: bold;
  &:hover {
    background: ${(props) => props.theme.color.orange2};
    color: #FFFFFF;
  }

  &.default {
    background: ${(props) => props.theme.color.gray2} !important;
    
    &:hover {
      background: ${(props) => props.theme.color.gray3} !important;
    }
  }
`;
