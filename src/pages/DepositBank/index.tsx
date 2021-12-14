import React, { ReactElement, useState, useEffect } from "react";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import { Title, TypeHead } from "../../components";

import { Confirm } from "../../store/modules/deposit/actions";
import { GetBank } from "../../store/modules/general/actions";
import { AccountBank } from "../../store/modules/deposit/types";
import { DepositState } from "../../store/modules/deposit/types";
import { GeneralState } from "../../store/modules/general/types";
import { Container, TitleContainer, Content } from "./styles";

import { Input, Button, InputGroup } from "../../components";
import { FormatToReal, FormatNumberBr, FormatToNumber } from "../../utils";

function DepositBank(): ReactElement {
  const [depositState, setDeposit] = useState({
    amount: "",
    branch: "",
    name: "",
    document: "",
    number: "",
    bank: "",
    bank_number: "",
  });
  const { deposit }: DepositState = useSelector(
    (state: any) => state.deposit,
    shallowEqual
  );

  const { banks }: GeneralState = useSelector(
    (state: any) => state.general,
    shallowEqual
  );

  const dispatch = useDispatch();
  const handler = () => {
    const { branch, name, document, number, bank, bank_number } = depositState;
    if (branch === "") {
      alert("agência é obrigatórios");
      return;
    }

    if (name === "") {
      alert("nome é obrigatórios");
      return;
    }

    if (document === "") {
      alert("documento é obrigatórios");
      return;
    }
    if (number === "") {
      alert("conta é obrigatórios");
      return;
    }
    if (bank_number === "") {
      alert("banco é obrigatórios");
      return;
    }

    const { token, amount_float } = deposit;
    let account: AccountBank = {
      branch,
      name,
      document,
      number,
      bank,
      bank_number,
    };

    dispatch(
      Confirm({
        amount_float,
        amount: amount_float,
        type: "bank",
        account,
        token,
      })
    );
  };

  useEffect(() => {
    dispatch(GetBank());
  }, []);

  const setValue = (e: React.FormEvent<HTMLInputElement>) => {
    setDeposit({
      ...depositState,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const setValueState = (field: string, value: any) => {
    setDeposit({
      ...depositState,
      [field]: value,
    });
  };

  const setValueStateBank = (code: string, bank: string) => {
    setDeposit({
      ...depositState,
      bank: bank,
      bank_number: code,
    });
  };

  return (
    <Container>
      <Title
        title={"Pagamento Ted"}
        subtitle={"Informe os dados da conta de origem"}
      />
      <Content>
        <InputGroup>
          <>
            <Input
              name="amount"
              label={"Valor"}
              value={FormatToReal(deposit.amount_float)}
              style={{ textAlign: "right" }}
              disabled
            />
          </>
        </InputGroup>
        <InputGroup>
          <>
            <Input
              type="document"
              name="document"
              label={"Cnpj ou cpf"}
              onChange={setValue}
              value={depositState.document}
              style={{ textAlign: "right" }}
            />
          </>
        </InputGroup>
        <InputGroup>
          <>
            <Input name="name" label={"Nome do titular"} onChange={setValue} />
          </>
        </InputGroup>
        <TypeHead
          name="bank"
          label={"Banco"}
          options={banks}
          onChange={(code: any, name: any) => setValueStateBank(code, name)}
        />
        <InputGroup>
          <>
            <Input
              name="branch"
              label={"Agência sem dígito"}
              onChange={setValue}
              style={{ textAlign: "right" }}
            />
            <Input
              name="number"
              label={"Conta com dígito"}
              onChange={setValue}
              style={{ textAlign: "right" }}
            />
          </>
        </InputGroup>
        <Button text={"Próximo"} onClick={() => handler()} />
      </Content>
    </Container>
  );
}

export default DepositBank;
