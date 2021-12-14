import React, { ReactElement, useState } from "react";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import Title from "../../components/Title";
import { Card, InputGroup } from "../../components";
import {} from "react-router-dom";

import { Confirm } from "../../store/modules/deposit/actions";

import { Container, TitleContainer, Content } from "./styles";

import Input from "../../components/Input";
import Button from "../../components/Button";
import { DepositState } from "../../store/modules/deposit/types";

function DepositAtar(): ReactElement {
  const [depositState, setDeposit] = useState({ amount: "" });
  const dispatch = useDispatch();
  const handler = () => {
    const { amount, amount_float } = deposit;
    dispatch(Confirm({ amount: amount_float, type: "pix", amount_float }));
  };

  const { deposit }: DepositState = useSelector(
    (state: any) => state.deposit,
    shallowEqual
  );

  const setValue = (e: React.FormEvent<HTMLInputElement>) => {
    setDeposit({
      ...depositState,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  return (
    <div className="container pt-5">
      <Card
        title={"Pagamento Pix"}
        subtitle={"Defina o valor que deseja solicitar"}
        >
        <>
          <div className="row">
            <div className="col-12">
              <InputGroup>
                <Input
                  name="amount"
                  label={"Valor"}
                  value={deposit.amount_float.toFixed(2)}
                  disabled
                  />
              </InputGroup>
            </div>
          </div>
          
          <div className="text-end">
            <Button text={"Próximo"} onClick={() => handler()} />       
          </div>
        </>
      </Card>
    </div>
  );
}

export default DepositAtar;
