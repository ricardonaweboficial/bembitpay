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
  display: flex;
`;

export const TextErrorAtar = styled.div`
  color: #fa1414;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 20px;
  text-align: center;
  padding: 10px;
`;

export const TokenPrice = styled.div`
  color: #1cef51;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 20px;
  text-align: center;
  padding: 2px 10px 12px 10px;
`;



export const LabelWallet = styled.div`
  color: #1cef51;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 20px;
  text-align: left;
  padding: 2px 10px 12px 10px;
`;

