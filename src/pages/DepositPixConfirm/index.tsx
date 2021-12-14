import React, { useEffect, ReactElement, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";
import Title from "../../components/Title";
import Lottie from "lottie-react-web";
import QRCode from "react-qr-code";

import {} from "react-router-dom";
import Animation from "../../assets/json/1870-check-mark-done.json";

import { Create, Detail, Check } from "../../store/modules/deposit/actions";
import { Card, TextInfo } from "../../components";
import {
  CounterContainer,
  Container,
  TitleContainer,
  Content,
  ColumnFields,
  Item,
  ItemLabel,
  ItemValue,
  QrcodeText,
  Row,
  AnimationContainer,
  ColumnQrCode,
} from "./styles";

import Button from "../../components/Button";
import { DepositState } from "../../store/modules/deposit/types";
import { FormatToReal } from "../../utils";

let TimerControl: any = null;

function DepositPixConfirm(): ReactElement {
  const history = useHistory();
  const [counter, setCounter] = useState(60);
  const [paid, setPaid] = useState(false);
  const [timeCounter, setTimeCounter] = useState(new Date().getTime());
  const dispatch = useDispatch();

  const { deposit, accountAtar }: DepositState = useSelector(
    (state: any) => state.deposit,
    shallowEqual
  );
  const counterHandler = () => {
    TimerControl = setInterval(() => {
      CheckDeposit();
    }, 1000);
  };

  useEffect(() => {
    counterHandler();
  }, []);

  useEffect(() => {
    if (deposit.status === "processed") {
      clearInterval(TimerControl);
      handler();
      setCounter(0);
    }
  }, [deposit, TimerControl]);

  const CheckDeposit = () => {
    const { token } = deposit;
    dispatch(Check({ token: String(token), loading: false }));
  };

  const handler = () => {
    setPaid(true);
    setTimeout(() => {
      history.push("/deposit/info/pix/done");
    }, 3000);
  };

  return (
    <div className="container pt-5">
      <Card
        title={"Pagamento Pix"}
        subtitle={"Agora você pode entrar no seu banco e ler esse qrcode."}
        >
        <>
          <div className="row mt-5">
            <div className="col-lg-8 col-12">
              <div className="row mt-5 mb-5">
                <div className="col-12">
                  <TextInfo
                    label={"Chave Pix"}
                    text={deposit.payment_url}
                    />

                  <TextInfo
                    label={"Valor para depositar"}
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
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-12 text-center">
              <ColumnQrCode>
                <QRCode value={deposit.payment_url} size={220} />
                <span className="d-block mt-2">
                  Você pode ler esse qrcode na sua conta bancária
                </span>
              </ColumnQrCode>
            </div>
          </div>

          <Row>
          {paid ? (
            <AnimationContainer>
              <Lottie
                options={{
                  animationData: Animation,
                  loop: false,
                }}
                height={129}
              />
            </AnimationContainer>
          ) : (
            <CounterContainer>
              <div className="alert alert-warning"> AGUARDANDO SEU DEPÓSITO</div>
            </CounterContainer>
          )}
        </Row>
        </>
      </Card>
    </div>
    
  );
}

export default DepositPixConfirm;
