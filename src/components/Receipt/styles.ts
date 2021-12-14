import styled from "styled-components";



export const Container = styled.div`
  -webkit-box-shadow: 0px 0px 13px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 13px -3px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 13px -3px rgba(0, 0, 0, 0.75);
`;

export const Body = styled.div`
  background-color: #f4f4f4;
  padding: 10px 26px;
`;

export const Header = styled.div`
  padding: 26px;
  background-color: #70ebc1;
  text-align: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  text-align: center;

  color: #1a1736;
`;

export const ContainerTutorial = styled.div`
  padding: 20px 0 20px 0;
  .title {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 26px;
    text-align: center;
    color: #1a1736;
  }
  .content{
    .label{
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 17px;
      line-height: 20px;
      /* identical to box height */

      color: #1A1736;
      margin: 20px 0 ;

    }
  }
`;
