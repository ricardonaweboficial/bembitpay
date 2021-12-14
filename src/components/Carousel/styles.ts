import styled from "styled-components";

import { device, size } from "../../styles/device";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

export const Content = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 20%;

  ${device.mobileSmall} {
    padding: 0 0%;
  }
  ${device.mobileMedium} {
    padding: 0 0%;
  }
  ${device.Tablet} {
    padding: 0 10%;
  }
`;

export const ItemContainer = styled.div`
  width: 100%;

  /* ${device.mobileSmall} {
    padding: 20px 15%;
    width: 100%;
  }

  ${device.mobileMedium} {
    padding: 20px 10%;
    width: 100%;
  }

  ${device.Tablet} {
    padding: 20px 15%;
    min-height: 300px;
    width: 100%;
  } */

  .content {
    justify-content: center;
    align-items: center;
  }

  padding: 10px 0;

  /* &:hover {
    cursor: pointer;
  } */
`;

export const ItemContent = styled.div`
  flex: 10;
  background-color: #ffff;
  justify-content: center;
  align-items: center;
  padding: 25px;
  .sub-title {
    text-align: center;
    font-size: 18px;
    margin-top: 12px;
  }
`;

export const ItemHeader = styled.div`
  ${device.mobileSmall} {
    font-size: 13px;
  }
  ${device.mobileMedium} {
    font-size: 16px;
  }
  ${device.Tablet} {
    font-size: 16px;
  }
`;

export const TextTarifa = styled.span`
  margin-top: 10px;
  color: #a273bf;
  display: block;
  font-weight: bold;
`;

export const Image = styled.img`
  width: 100%;
  object-fit: contain;
`;
