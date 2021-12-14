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
    padding: 0 10%;
  }
  ${device.mobileMedium} {
    padding: 0 10%;
  }
  ${device.Tablet} {
    padding: 0 15%;
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

export const Item = styled.div`
  margin-bottom: 40px;
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
  &.info {
    max-width: 210px;
    color: #f46538;
    margin-top: 10px;
  }
`;

export const UploadContainer = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  &.uploaded {
    opacity: 0.2;
    pointer-events: none;
  }
`;

export const UploadContent = styled.div`
  border: 1px dashed #ffffff;
  padding: 30px;
`;

export const UploadText = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
`;

export const AnimationContainer = styled.div``;

export const AnimationText = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  color: #ffffff;
  text-align: center;
`;
