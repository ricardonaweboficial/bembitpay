import React, { useEffect, ReactElement, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";
import QRCode from "react-qr-code";
import {
  listDepositsTypes,
  GetSale,
} from "../../store/modules/general/actions";
import {} from "react-router-dom";
import { Create } from "../../store/modules/sale/actions";
import { Receipt, ReceiptWithdraw, Button, InputGroup, Card, Link  } from "../../components";


import {
  Container,
  TitleContainer,
  ReceitContent,
  ButtonContainer,
  Content,
  ContainerButton,
  Title
} from "./styles";

import { TokenPrice, LabelWallet } from "../../pages/Sales/styles";

import { DepositState } from "../../store/modules/deposit/types";


import {
  FormatToReal,
  FormatNumberBr,
  ValidateCpf,
  ValidateDate,
  FormatToNumber,
  FormatToRealPrice,
} from "../../utils";


import { GeneralState } from "../../store/modules/general/types";
import Input from "../../components/Input";
import imgGoogleStore from "../../assets/images/googlePlay.png";
import imgAppleStore from "../../assets/images/appStore.png";

function WithdrawCancel(): ReactElement {
  const [saleState, setSale] = useState({
    name: "",
    email: "",
    document: "",
    birth_date: "",
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
    const { quantity, document, birth_date, name, email, phone, address,total } = saleState;
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

    if (address === "") {
      alert("endereço de carteira é obrigatório");
      return;
    }

    if (document == "" || !ValidateCpf(document)) {
      alert("Informe um CPF válido");
      return;
    } 

    if (birth_date == "" || !ValidateDate(birth_date)) {
      alert("Informe uma data de nascimento válida");
      return;
    } 

    if (!/^0x[a-fA-F0-9]{40}$/.test(address)){
      alert("endereço de carteira inválido");
      return;
    }

    if (parseFloat(total) < 50.00){
      alert("valor não pode ser menor que R$50,00 ");
      return;
    }

    dispatch(
      Create({
        quantity: parseFloat(quantity),
        name,
        document,
        birth_date,
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
      <div className="container-app">
        <div className="row">
          <div className="col-lg-6 col-12 mb-3">      
          <Title className="font-weight-bold mt-5">Compre Light via Pix.<br />
Rápido. Prático. Sem burocracia.</Title>

            <p className="mt-3">
              Agora, quem quiser comprar o token que investe em energia  renovável pode usar a ferramenta de transferência de dinheiro
              mais popular do Brasil.
            </p>

            {/* <h2 className="mt-3">Consectetur imperdiet.</h2> */}

            <p className="mt-3">
            Para comprar a Light DeFi pelo Pix basta preencher o formulário ao lado, depositar o dinheiro e esperar seus criptoativos chegarem
no endereço indicado. É muito rápido!
            </p>

            <p className="mt-3">
            Não é uma maravilha? Lembrando que as vendas do Light DeFi continuam exclusivamente através da PancakeSwap, já que o Pix foi 
lançado como uma alternativa para os usuários que enfrentam dificuldades em utilizar a plataforma em operações de compra.
            </p>

            <div className="alert alert-warning mt-3">
              <ul className="m-0 ps-4 pe-4 pb-2 pt-2">
                <li className="mb-3">O processo de compra via Pix não é oferecido pela Light. É um serviço prestado por terceiros.</li>
                <li className="mb-3">Não nos responsabilizamos caso o usuário informe um número errado de carteira. Após a    confirmação do pagamento, é um processo irreversível
   Por isso, confira os dados com bastante atenção.</li>
                <li className="mb-3">Serão cobradas as taxas de R$ 5,00 + 2% - referente ao meio de pagamento.</li>
                <li>Compra mínima de R$ 50,00 e serão descontados 10% de taxa de rede</li>
              </ul>
            </div>

            <div className="row">
              <p className="col-12 mt-5">
              Baixe o aplicativo "Trust - Carteira de Criptomoedas e Bitcoin":
              </p>

              <div className="col-lg-3 col-6">
                <a href="https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp&referrer=utm_source%3Dwebsite" target="_blank"><img src={imgGoogleStore} className="img-fluid" /></a>                
              </div>
              
              <div className="col-lg-3 col-6">
                <a href="https://apps.apple.com/app/apple-store/id1288339409?pt=1324988&ct=website&mt=8" target="_blank"><img src={imgAppleStore} className="img-fluid" /></a>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-12">
            <Card>
              <>
                <Title className="font-weight-bold">Quer Comprar <span>Light DeFi?</span></Title>
                <p>Preencha o formulário abaixo definindo o valor e seus dados para a compra do Token.</p>

                <span className="text-danger mt-5 mb-5"><strong>ATENÇÃO:</strong> CASO NÃO SEJA INFORMADO O "NOME COMPLETO", A TRANSAÇÃO NÃO SERÁ COMPLETADA E O RECURSO SERÁ RETIDO.</span>

                <div>
                  <InputGroup>
                    <Input name="name" label={"Nome Completo"} onChange={setValue} />
                  </InputGroup>

                  <InputGroup>
                    <Input mask={"999.999.999-99"} name="document" type={"document"} label={"CPF"} onChange={setValue} />
                  </InputGroup>

                  <InputGroup>
                    <Input mask={"99/99/9999"} name="birth_date" type={"birth_date"} label={"Data de Nascimento"} onChange={setValue} />
                  </InputGroup>

                  <InputGroup>
                    <Input
                      name="phone"
                      label={"Celular"}
                      onChange={setValue}
                      value={saleState.phone}
                      style={{ textAlign: "right" }}
                    />
                  </InputGroup>

                  <InputGroup>
                    <Input name="email" label={"Email"} onChange={setValue} />
                  </InputGroup>


                  <InputGroup>
                    <Input
                      name="address"
                      label={"Endereço de carteira (BSC)"}
                      onChange={setValue}
                      value={saleState.address}
                      style={{ textAlign: "left" }}
                    />
                  </InputGroup>

                  <Link 
                    text={"Endereço de carteira da rede BSC (Binance Smart Chain - BEP20)"}
                    target={"_blank"}
                    link={"https://academy.binance.com/pt/articles/how-to-use-binance-chain-wallet"}
                      />

                  <InputGroup>
                    <Input
                      name="total"
                      label={"Valor em Real"}
                      onChange={ChangeCheckValue}
                      value={saleState.total}
                      style={{ textAlign: "right" }}
                    />
                  </InputGroup>

                  <InputGroup>
                    <Input
                      name="quantity"
                      label={"Quantidade em Token"}
                      onChange={ChangeCheckValue}
                      value={saleState.quantity}
                      style={{ textAlign: "right" }}
                    />
                  </InputGroup>

                 

                  <InputGroup>
                    <Input
                      name="fee"
                      label={"Taxas"}
                      disabled
                      value={FormatToReal(feeTotal) + " (Taxas)"}
                      style={{ textAlign: "right" }}
                    />
                  </InputGroup>

                  <InputGroup>
                    <Input
                      name="total_pay"
                      label={"Total a Pagar"}
                      disabled
                      value={FormatToReal(totalPay) + " (Total a Pagar)"}
                      style={{ textAlign: "right" }}
                    />
                  </InputGroup>

                </div>
                <div className="text-end">
                  <Button
                    text={"Continuar"}
                    onClick={() => handler()}
                    />
                </div>
                </>
            </Card>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default WithdrawCancel;
