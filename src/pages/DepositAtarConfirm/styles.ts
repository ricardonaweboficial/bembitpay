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

export const Row = styled.div`
  flex-direction: row;
  justify-content: center;
  @media (max-width: ${size.tablet}) {
    &.info {
      display: block;
    }
  }
`;

export const ColumnFields = styled.div`
  flex: 1;
  justify-content: space-between;
  padding: 10px 10px 25px 10px;
  @media (max-width: ${size.tablet}) {
    height: 200px;
    display: inline-block;
  }
`;

export const ColumnQrCode = styled.div`
  flex: 1;
  padding: 10px;
  align-items: center;
  @media (max-width: ${size.tablet}) {
    height: 300px;
  }
`;

export const Item = styled.div`
  padding: 10px 0;
`;

export const ItemLabel = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  @media (max-width: ${size.tablet}) {
    margin: 10px 0;
  }

  color: #fff0f0;
`;

export const ItemValue = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;

  color: #fff0f0;
`;

export const QrcodeText = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  @media (max-width: ${size.tablet}) {
    margin: 10px 0;
  }

  color: #ffffff;
`;

export const CounterContainer = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & .counter {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 34px;
    line-height: 41px;
    color: #ffe1e1;
    margin: 20px 0 20px 0;
  }
  & .title {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #ffe1e1;
  }
`;

export const AnimationContainer = styled.div``;
