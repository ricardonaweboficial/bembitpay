import React, { ReactElement, useState, useEffect } from "react";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import { Title, InputGroup } from "../../components";

import {} from "react-router-dom";
import {
  FormatToReal,
  FormatNumberBr,
  FormatToNumber,
  FormatToRealPrice,
} from "../../utils";
import { Create } from "../../store/modules/sale/actions";
import { Container, Content, TokenPrice, LabelWallet } from "./styles";
import { GeneralState } from "../../store/modules/general/types";
import Input from "../../components/Input";
import Button from "../../components/Button";
import {
  listDepositsTypes,
  GetSale,
} from "../../store/modules/general/actions";

function Sale(): ReactElement {
  const [saleState, setSale] = useState({
    name: "",
    email: "",
    phone: "",
    quantity: "",
    total: "",
    fee: "",
    totalPay: "",
    address: "",
  });
  const [feeAbsolut, setFeeAbsolut] = useState(0);
  const [feePercent, setFeePercent] = useState(0);
  const [feeTotal, setFeeTotal] = useState(0);
  const [totalPay, setTotalPay] = useState(0);
  const dispatch = useDispatch();

  const { deposits, salePrice }: GeneralState = useSelector(
    (state: any) => state.general,
    shallowEqual
  );

  const handler = () => {
    const { quantity, name, email, phone, address } = saleState;
    if (quantity === "") {
      alert("quantidade é obrigatório");
      return;
    }
    if (name === "") {
      alert("name é obrigatório");
      return;
    }
    if (email === "") {
      alert("email é obrigatório");
      return;
    }
    if (phone === "") {
      alert("phone é obrigatório");
      return;
    }

    if (address === "") {
      alert("endereço de carteira é obrigatório");
      return;
    }

    dispatch(
      Create({
        quantity: parseFloat(quantity),
        name,
        email,
        phone,
        fee: feeTotal,
        total_pay: totalPay,
        address: saleState.address,
      })
    );
  };

  const setValue = (e: React.FormEvent<HTMLInputElement>) => {
    let fieldValue = e.currentTarget.value;
    switch (e.currentTarget.name) {
      case "phone":
        fieldValue = FormatNumberBr(fieldValue);
        if (fieldValue.length >= 16) return;
        break;
      default:
        fieldValue = e.currentTarget.value;
        break;
    }
    setSale({
      ...saleState,
      [e.currentTarget.name]: fieldValue,
    });
  };

  useEffect(() => {
    dispatch(listDepositsTypes());
    dispatch(GetSale());
  }, []);

  useEffect(() => {
    let feeRef = deposits.find((item) => item.type === "pix");
    if (feeRef !== undefined) {
      let absolut: number = feeRef.fee?.absolut as number;
      let percent: number = feeRef.fee?.percent as number;
      setFeeAbsolut(absolut);
      setFeePercent(percent);
    }
  }, [deposits]);

  useEffect(() => {
    let total = FormatToNumber(saleState.total);
    let feePercentTotal = (total / 100) * feePercent;
    let FeeTotal = feeAbsolut + feePercentTotal;
    setFeeTotal(FeeTotal);
    setTotalPay(total + FeeTotal);
  }, [saleState]);

  const ChangeCheckValue = (e: React.FormEvent<HTMLInputElement>) => {
    let value: number = 0.0;
    let valueFormated: string = "";
    let field = "quantity";
    let valueField: number = parseFloat(e.currentTarget.value);

    let valueFieldTotal: number = 0;
    if (isNaN(valueField)) {
      valueFieldTotal = 0;
    } else {
      valueFieldTotal = valueField;
    }
    switch (e.currentTarget.name) {
      case "quantity":
        value = salePrice.price * valueFieldTotal;
        field = "total";
        valueFormated = FormatToReal(value);
        break;
      case "total":
        value = valueFieldTotal / salePrice.price;
        field = "quantity";
        valueFormated = value.toFixed(0);
        break;
    }
    setSale({
      ...saleState,
      [e.currentTarget.name]: e.currentTarget.value,
      [field]: valueFormated,
    });
  };

  return (
    <Container>
      <Title
        title={"Pré-venda"}
        subtitle={"Defina o valor e seus dados para a compra do Token"}
      />
      <Content>
        <InputGroup>
          <>
            <Input name="name" label={"Nome"} onChange={setValue} />
          </>
        </InputGroup>
        <InputGroup>
          <>
            <Input
              name="phone"
              label={"Celular"}
              onChange={setValue}
              value={saleState.phone}
              style={{ textAlign: "right" }}
            />
          </>
        </InputGroup>
        <InputGroup>
          <>
            <Input
              name="address"
              label={"Endereço de  carteira(BSC)"}
              onChange={setValue}
              value={saleState.address}
              style={{ textAlign: "left" }}
            />
          </>
        </InputGroup>
        <LabelWallet>
          Endereço de carteira da rede BSC (binance smart chain)
        </LabelWallet>
        <InputGroup>
          <>
            <Input name="email" label={"Email"} onChange={setValue} />
          </>
        </InputGroup>
        <InputGroup>
          <>
            <Input
              name="quantity"
              label={"Quantidade em Token"}
              onChange={ChangeCheckValue}
              value={saleState.quantity}
              style={{ textAlign: "right" }}
            />
            <Input
              name="total"
              label={"Valor em Real"}
              onChange={ChangeCheckValue}
              value={saleState.total}
              style={{ textAlign: "right" }}
            />
          </>
        </InputGroup>
        <InputGroup>
          <>
            <Input
              name="fee"
              label={"Taxas"}
              disabled
              value={FormatToReal(feeTotal)}
              style={{ textAlign: "right" }}
            />
            <Input
              name="total_pay"
              label={"Total a Pagar"}
              disabled
              value={FormatToReal(totalPay)}
              style={{ textAlign: "right" }}
            />
          </>
        </InputGroup>
        <TokenPrice>
          Preço Unitário {FormatToRealPrice(parseFloat(salePrice.price))}
        </TokenPrice>

        {/* <Input name="amount" label={"Valor"} onChange={setValue} /> */}
        <Button text={"Próximo"} onClick={() => handler()} />
      </Content>
    </Container>
  );
}

export default Sale;
