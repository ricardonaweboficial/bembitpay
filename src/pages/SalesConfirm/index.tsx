import React, { useEffect, ReactElement, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";
import Lottie from "lottie-react-web";

import {} from "react-router-dom";
import Animation from "../../assets/json/1870-check-mark-done.json";
import { RegisterSale } from "../../store/modules/sale/actions";
import { GeneralState, ListItems } from "../../store/modules/general/types";
import {
  ContainerButton,
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
  ReceitContent,
  ButtonBack,
} from "./styles";

import { Button, Title, Receipt, Card, TextInfo } from "../../components";
import { FormatToReal, FormatToRealPrice } from "../../utils";
import { SaleState } from "../../store/modules/sale/types";
import {
  listDepositsTypes,
  GetSale,
} from "../../store/modules/general/actions";
function DepositAtarConfirm(): ReactElement {
  const history = useHistory();
  const [counter, setCounter] = useState(10);
  const [paid, setPaid] = useState(false);
  const [fee, setFee] = useState(0);
  const [totalToken, setTotalToken] = useState(0);
  const dispatch = useDispatch();

  const { sale }: SaleState = useSelector(
    (state: any) => state.sale,
    shallowEqual
  );

  const { deposits, salePrice }: GeneralState = useSelector(
    (state: any) => state.general,
    shallowEqual
  );

  useEffect(() => {
    dispatch(listDepositsTypes());
    dispatch(GetSale());
  }, []);

  const handler = () => {
    const { name, document, birth_date, email, phone, quantity } = sale;
    dispatch(
      RegisterSale({ name, document, birth_date, email, phone, quantity, address: sale.address })
    );
  };

  return (
    <div className="container pt-5">
      <Card
        title={"Confira seus dados a seguir"}
        >
        <>
          <div className="row mt-5">
            <div className="col-12">
            <div className="alert alert-danger">ATENÇÃO: É MUITO IMPORTANTE CONFIRMAR OS DADOS ANTES DE SEGUIR.</div>
           
              <div className="row mt-5 mb-5">
                <div className="col-12">
                  <TextInfo
                    label={"Nome Completo"}
                    text={sale?.name}
                    />

                  <TextInfo
                    label={"CPF"}
                    text={sale?.document}
                    />

                  <TextInfo
                    label={"Data de Nascimento"}
                    text={sale?.birth_date}
                    />

                  <TextInfo
                    label={"Email"}
                    text={sale?.email}
                    />

                  <TextInfo
                    label={"Celular"}
                    text={sale?.phone}
                    />

                  <TextInfo
                    label={"Endereço de carteira (BSC)"}
                    text={sale?.address}
                    />

                  <TextInfo
                    label={"Preço unitário"}
                    text={FormatToRealPrice(parseFloat(salePrice.price as string))}
                    />

                  <TextInfo
                    label={"Quantidade"}
                    text={sale.quantity + " LIGHT"}
                    />

                  <TextInfo
                    label={"Taxa do Processador (C01NBR)"}
                    text={FormatToReal(sale?.fee)}
                    />

                  <TextInfo
                    label={"Total à pagar"}
                    text={FormatToReal(sale.total_pay)}
                    />
                  </div>
              </div>

              <div className="alert alert-danger">
                ATENÇÃO: É MUITO IMPORTANTE CONFIRMAR OS DADOS ANTES DE SEGUIR.
              </div>

              <span>*Não nos responsabilizamos caso o usuário informe um número errado de carteira.</span>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-6 col-md-6 col-sm-6  col-12">
              <Button className={"default float-start"} text={"Voltar"} onClick={() => history.goBack()} />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <Button className={"float-end"} text={"Confirmar"} onClick={() => handler()} />
            </div>
          </div>
        </>
      </Card>
    </div>
  );
}

export default DepositAtarConfirm;
