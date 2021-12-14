import React, { useEffect, ReactElement, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";
import Title from "../../components/Title";
import Lottie from "lottie-react-web";
import QRCode from "react-qr-code";

import {} from "react-router-dom";
import Animation from "../../assets/json/1870-check-mark-done.json";

import { Create, Detail, Check } from "../../store/modules/deposit/actions";

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

function DepositAtarConfirm(): ReactElement {
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
      let now = new Date().getTime();
      let counterTimeResult = (now - timeCounter) / 1000;
      let newCounter = counter - counterTimeResult;
      setCounter(newCounter);
      setTimeCounter(now);
      CheckDeposit();
      // if (newCounter <= 0) {
      //   clearInterval(TimerControl);
      //   setCounter(0);
      // }
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
      history.push("/deposit/info/atar/done");
    }, 3000);
  };

  return (
    <Container>
      <Title
        title={"Pagamento AtarPay"}
        subtitle={"Agora basta transferir o valor indicado  para nossa conta."}
      />
      <Content>
        <Row className="info">
          <ColumnFields>
            <Item>
              <ItemLabel>Nosso AtarPay ID:</ItemLabel>
              <ItemValue>{accountAtar?.atarid}</ItemValue>
            </Item>
            <Item>
              <ItemLabel>Nome da nossa conta:</ItemLabel>
              <ItemValue>{accountAtar?.name}</ItemValue>
            </Item>
            <Item>
              <ItemLabel>Valor total à pagar:</ItemLabel>
              <ItemValue> {FormatToReal(deposit?.total)}</ItemValue>
            </Item>
          </ColumnFields>
          <ColumnQrCode>
            <QRCode value={accountAtar.atarid} size={220} />
            <QrcodeText>
              Você pode ler esse qrcode na sua conta AtarPay
            </QrcodeText>
          </ColumnQrCode>
        </Row>
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
              {/* <div className="counter">{counter.toFixed(0)} s</div> */}
              <div className="title"> AGUARDANDO SEU DEPÓSITO</div>
            </CounterContainer>
          )}
        </Row>
      </Content>
    </Container>
  );
}

export default DepositAtarConfirm;
