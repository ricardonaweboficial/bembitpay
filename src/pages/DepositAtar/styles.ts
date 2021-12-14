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
  padding: 0 35% 0 35%;
  display: flex;
  @media (max-width: ${size.tablet}) {
    padding: 0 15% 0 15%;
  }
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
