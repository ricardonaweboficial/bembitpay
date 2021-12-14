import React, { ReactElement, useState } from "react";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import { Title, InputGroup } from "../../components";

import {} from "react-router-dom";

import { Confirm, CheckAtarId } from "../../store/modules/deposit/actions";
import { DepositState } from "../../store/modules/deposit/types";
import { Container, TitleContainer, Content, TextErrorAtar } from "./styles";
import { FormatToReal, FormatNumberBr, FormatToNumber } from "../../utils";

import Input from "../../components/Input";
import Button from "../../components/Button";

function DepositAtar(): ReactElement {
  const [depositState, setDeposit] = useState({ amount: "", atarid: "" });
  const dispatch = useDispatch();
  const { deposit, exists, atarChecked }: DepositState = useSelector(
    (state: any) => state.deposit,
    shallowEqual
  );

  const handler = () => {
    const { amount, atarid } = depositState;
    const { token, amount_float } = deposit;
    if (atarid === "") {
      alert("atarid é obrigatórios");
      return;
    }

    dispatch(
      Confirm({
        amount: amount_float,
        amount_float,
        atarid,
        type: "atar",
        token,
      })
    );
  };

  const checkAtar = () => {
    const { amount, atarid } = depositState;
    const { token } = deposit;
    if (atarid === "") {
      alert("AtarPay ID é obrigatório");
      return;
    }

    dispatch(CheckAtarId({ atarid }));
  };

  const setValue = (e: React.FormEvent<HTMLInputElement>) => {
    setDeposit({
      ...depositState,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  return (
    <Container>
      <Title
        title={"Pagamento AtarPay"}
        subtitle={"Informe o seu AtarPay ID pra podermos te identificar"}
      />
      <Content>
        <InputGroup>
          <>
            <Input
              name="amount"
              label={"Valor"}
              value={FormatToReal(deposit.amount_float)}
              disabled
              style={{ textAlign: "right" }}
            />
          </>
        </InputGroup>

        <InputGroup>
          <>
            <Input
              name="atarid"
              label={"AtarPay ID"}
              onChange={setValue}
              style={{ textAlign: "right" }}
            />
          </>
        </InputGroup>

        {!exists && atarChecked && (
          <TextErrorAtar>AtarPay ID não é válido</TextErrorAtar>
        )}
        {exists ? (
          <Button text={"Próximo"} onClick={() => handler()} />
        ) : (
          <Button text={"Verificar AtarPay ID"} onClick={() => checkAtar()} />
        )}
      </Content>
    </Container>
  );
}

export default DepositAtar;
