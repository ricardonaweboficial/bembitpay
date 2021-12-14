import React, { useEffect, ReactElement, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";
import Title from "../../components/Title";
import QRCode from "react-qr-code";

import {} from "react-router-dom";

import { Create } from "../../store/modules/deposit/actions";
import Button from "../../components/Button";

import {
  Container,
  TitleContainer,
  ReceiptConent,
  ButtonContainer,
  Content,
} from "./styles";

import Receipt from "../../components/Receipt";
import ReceiptTutorialDeposit from "../../components/Receipt/tutorialDeposit";

import { DepositState } from "../../store/modules/deposit/types";
import { FormatToReal } from "../../utils";
function DepositAtarDone(): ReactElement {
  const history = useHistory();
  const dispatch = useDispatch();

  const { deposit, accountAtar }: DepositState = useSelector(
    (state: any) => state.deposit,
    shallowEqual
  );

  return (
    <Container>
      <TitleContainer></TitleContainer>
      <Content>
        <Receipt title={`Protocolo: ${deposit.token}`}>
          <ReceiptConent>
            <div className="amount">
              <div className="label">Valor total pago: </div>
              <div className="display">{FormatToReal(deposit?.amount)}</div>
            </div>
            <div className="division" />
          </ReceiptConent>
        </Receipt>
        <ButtonContainer>
          <Button text={"Voltar"} onClick={() => history.push("/")} />
        </ButtonContainer>
      </Content>
    </Container>
  );
}

export default DepositAtarDone;
