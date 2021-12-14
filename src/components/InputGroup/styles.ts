import styled from "styled-components";
import { device } from "../../styles/device";

export const Container = styled.div``;

export const Content = styled.div`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .label-container {
    flex: 2;
    margin-left: 10px;
    width: 100%;
    &:first-child {
      margin-left: 0;
    }
  }
  ${device.Tablet} {
    flex-direction: column;
    .label-container {
      margin-left: 0;
    }
  }
  ${device.mobileSmall} {
    flex-direction: column;
    .label-container {
      margin-left: 0;
    }
  }

  ${device.mobileMedium} {
    flex-direction: column;
  }
`;
