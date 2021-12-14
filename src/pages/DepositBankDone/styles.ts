import styled from "styled-components";
import { device, size } from "../../styles/device";
import {
  ContentBase,
  TitleContainerBase,
  ContainerBase,
} from "../../styles/base";

export const Container = styled(ContainerBase)``;

export const TitleContainer = styled(TitleContainerBase)``;

export const Content = styled(ContentBase)`
  padding: 0 15%;
  display: flex;
  @media (max-width: ${size.tablet}) {
    padding: 0 15% 0 15%;
  }
  flex-direction: column;
`;

export const ReceiptConent = styled.div`
  .atarid,
  .amount {
    display: flex;
    flex-direction: row;
    margin: 10px 0;
    .display,
    .label {
      font-family: Roboto;
      font-style: normal;
      font-size: 22px;
      line-height: 26px;
      color: #1a1736;
    }
    .label {
      font-weight: bold;
      margin-right: 4px;
    }

    span {
      font-weight: normal;
    }
  }

  .division {
    border: 1px dashed #000000;
    margin: 10px 0;
  }
`;

export const ButtonContainer = styled.div`
  padding: 20px 0;
`;
