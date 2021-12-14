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
  padding: 0 25%;
  display: flex;
  ${device.mobileSmall} {
    padding: 0 15%;
  }
  ${device.mobileMedium} {
    padding: 0 10%;
  }
  ${device.Tablet} {
    padding: 0 15%;
  }
  flex-direction: column;
`;

export const Title = styled.h1`
  font-weight: bold;

  span {
    font-size: 100%;
    color: ${(props) => props.theme.color.orange};
    font-weight: bold;
  }
`;

export const Card = styled.div`
  width: 100%;
  background: #FFFFFF;
  box-shadow: 10px 10px 25px rgba(221, 221, 221, 0.9);
  border-radius: 5px;
  padding: 25px;
`;

export const ReceitContent = styled.div`
  .atarid,
  .amount {
    display: flex;
    flex-direction: row;
    margin: 10px 0;
    .display {
      font-family: Roboto;
      font-style: normal;
      font-size: 22px;
      line-height: 26px;
      color: #1a1736;
      &:hover {
        text-decoration: underline;
      }
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

export const ContainerButton = styled.div`
  padding: 10px 5% 10px 5%;
`;