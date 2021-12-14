import React, { useEffect, ReactElement, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";
import Title from "../../components/Title";
import QRCode from "react-qr-code";

import {} from "react-router-dom";

import { Create } from "../../store/modules/deposit/actions";
import Button from "../../components/Button";
import { Card, TextInfo } from "../../components";

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
    <div className="container pt-5">
      <Card
        title={"Pagamento Pix"}
        subtitle={"Seu comprovante de deposito"}
        >
        <>
          <div className="row mt-5">
            <div className="col-12">
              <div className="row mb-5">
                <div className="col-12">
                  <TextInfo
                    label={"Protocolo"}
                    text={`${deposit.token}`}
                    />

                  <TextInfo
                    label={"Valor"}
                    text={FormatToReal(deposit?.total)}
                    />

                  <TextInfo
                    label={"Taxa total"}
                    text={FormatToReal(deposit?.fee)}
                    />

                  <TextInfo
                    label={"Valor da operação"}
                    text={FormatToReal(deposit?.amount_receivable)}
                    />

                  {/* <ReceiptTutorialDeposit /> */}
                </div>
              </div>
            </div>

            <div className="col-12">
              <Button className="default" text={"Voltar"} onClick={() => history.push("/")} />
            </div>
          </div>
        </>
      </Card>
    </div>
  );
}

export default DepositAtarDone;
