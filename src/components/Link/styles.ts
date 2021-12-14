import styled from "styled-components";

import { device, size } from "../../styles/device";

export const Link = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.color.orange};

  &:hover {
    color: ${(props) => props.theme.color.orange2};
  }
`;
