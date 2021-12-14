import styled from "styled-components";
import { device } from "./device";

export const ContainerBase = styled.div`
  flex: 1;
  padding: 50px 0;
`;

export const TitleContainerBase = styled.div`
  flex: 2;
  align-items: center;
  flex-direction: column;
  display: flex;
`;

export const ContentBase = styled.div`
  flex: 14;
  padding: 0 15%;
  ${device.mobileSmall} {
    padding: 0 15%;
  }
  ${device.mobileMedium} {
    padding: 0 10%;
  }
  ${device.Tablet} {
    padding: 0 15%;
  }
  ${device.Desktop} {
    padding: 0 25%;
  }
`;
