import React, { useEffect, ReactElement, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";
import Title from "../../components/Title";
import QRCode from "react-qr-code";

import {} from "react-router-dom";
import { Create } from "../../store/modules/deposit/actions";
import { Receipt, ReceiptWithdraw, Button } from "../../components";

import {
  Container,
  TitleContainer,
  ReceitContent,
  ButtonContainer,
  Content,
} from "./styles";

import { DepositState } from "../../store/modules/deposit/types";
import { FormatToReal } from "../../utils";
function WithdrawCancel(): ReactElement {
  const history = useHistory();
  const dispatch = useDispatch();

  const { deposit }: DepositState = useSelector(
    (state: any) => state.deposit,
    shallowEqual
  );

  return (
    <Container>
      <Title title={"Pagamento"} subtitle={"Seu pagamento foi cancelado"} />
      <Content>
        <Receipt title={`Protocolo: ${deposit.token}`}>
          <ReceitContent>
            <div className="amount">
              <div className="label">Valor: </div>
              <div className="display">{FormatToReal(deposit?.total)}</div>
            </div>
            <div className="division" />
            <ReceiptWithdraw title={"Obrigado por confiar na X"} />
          </ReceitContent>
        </Receipt>
        <ButtonContainer>
          <Button text={"Voltar"} onClick={() => history.push("/")} />
        </ButtonContainer>
      </Content>
    </Container>
  );
}

export default WithdrawCancel;
