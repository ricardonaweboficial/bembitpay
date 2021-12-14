import styled from "styled-components";

import { device, size } from "../../styles/device";

export const HeaderContainer = styled.a`
  flex: 1;
  background-color: ${(props) => props.theme.color.gray};
  align-items: center;
  flex-direction: row;
  padding: 25px 10px 25px 10px;
`;

export const LogoImage = styled.img`
  width: 150px;
`;
