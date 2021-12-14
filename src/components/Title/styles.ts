import styled from "styled-components";

import { device } from "../../styles/device";

export const Container = styled.div`
  flex: 1;
  justify-content: center;
  flex-direction: column;
  padding: 30px 25%;
  ${device.mobileSmall} {
    padding: 0 15%;
  }
  ${device.mobileMedium} {
    padding: 0 10%;
  }
  ${device.Tablet} {
    padding: 0 15%;
  }
`;

export const TitleContainer = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 45px;
  line-height: 53px;
  color: #ffffff;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 40px;
  }
  ${device.mobileSmall} {
    font-size: 30px;
  }
`;

export const SubTitleContainer = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  line-height: 30px;
  color: #ffffff;
  @media (max-width: 768px) {
    font-size: 22px;
  }
  margin: 20px 0;
`;

export const Division = styled.div`
  border: 1px solid #ef9d1c;
  width: 100%;
  margin: 20px 0 20px 0;
`;
