import styled from "styled-components";

import { device, size } from "../../styles/device";

import CpfCnpj from "@react-br-forms/cpf-cnpj-mask";

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  position: relative;
  margin: 20px 0 20px 0;
  border-radius: 12px;
  width: 100%;
  &.number {
    input {
      text-align: right;
    }
  }
  .document {
    border: none;
    background-color: #1a1736;
    border-radius: 12px;
    padding: 15px 10px;
    &:focus {
      padding: 15px 10px;
    }
    color: #ffffff;
    width: auto;
  }
`;

export const Label = styled.div`
 
`;

export const Input = styled.input`
  font-family: 'Open Sans', sans-serif !important;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #505050;
  text-align: left !important;
  background: #FFFFFF;
  border: 1px solid #ADADAD;
  border-radius: 3px;
`;
