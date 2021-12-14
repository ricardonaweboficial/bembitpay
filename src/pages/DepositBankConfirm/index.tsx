import React, { useEffect, ReactElement, useState, useCallback } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { Create, Upload } from "../../store/modules/deposit/actions";
import Animation from "../../assets/json/1870-check-mark-done.json";
import Lottie from "lottie-react-web";
import { FaCloudUploadAlt } from "react-icons/fa";
import {
  UploadText,
  UploadContainer,
  UploadContent,
  Container,
  TitleContainer,
  Content,
  Item,
  ItemLabel,
  ItemValue,
  Row,
  AnimationContainer,
  AnimationText,
} from "./styles";

import { Button, Title } from "../../components";
import { DepositState } from "../../store/modules/deposit/types";
import { FormatToReal, FormatNumberBr, FormatToNumber } from "../../utils";
function DepositAtarConfirm(): ReactElement {
  const history = useHistory();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { accountBank, deposit, uploaded }: DepositState = useSelector(
    (state: any) => state.deposit,
    shallowEqual
  );
  const onDrop = useCallback((acceptedFiles) => {
    var file = acceptedFiles[0];
    let form = new FormData();
    form.append("file", file);
    dispatch(Upload({ form, token: String(deposit.token) }));
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  useEffect(() => { }, []);

  const handler = () => { };

  return (
    <Container>
      <Title
        title={"Pagamento Ted"}
        subtitle={
          "Faça a transferência de uma conta de sua titularidade para a conta conforme indicado a seguir."
        }
      />
      <Content>
        <Item>
          <ItemLabel>Titular:</ItemLabel>
          <ItemValue>{accountBank.name}</ItemValue>
        </Item>
        <Item>
          <ItemLabel>CNPJ</ItemLabel>
          <ItemValue>{accountBank.document}</ItemValue>
        </Item>
        <Item>
          <ItemLabel>CHAVE PIX</ItemLabel>
          <ItemValue>{accountBank.pixKey}</ItemValue>
        </Item>
        <Item>
          <ItemLabel>Banco:</ItemLabel>
          <ItemValue>
            {accountBank.bankName}({accountBank.bank})
          </ItemValue>
        </Item>
        <Item>
          <ItemLabel>Agencia:</ItemLabel>
          <ItemValue>{accountBank.branch}</ItemValue>
        </Item>
        <Item>
          <ItemLabel>Conta:</ItemLabel>
          <ItemValue>{accountBank.number}</ItemValue>
        </Item>
        <Item>
          <ItemLabel>Valor total à pagar:</ItemLabel>
          <ItemValue> {FormatToReal(deposit?.total)}</ItemValue>
          <ItemValue className="info">
            O valor precisa ser exatamente esse para o sistema identificar.
          </ItemValue>
        </Item>
        <Row>
          {uploaded ? (
            <AnimationContainer>
              <AnimationText>Seu deposito está sendo processado</AnimationText>
              <Lottie
                options={{
                  animationData: Animation,
                  loop: false,
                }}
                height={129}
              />
            </AnimationContainer>
          ) : (
            <UploadContainer
              {...getRootProps()}
              className={uploaded ? "uploaded" : ""}
            >
              <UploadContent>
                <input {...getInputProps()} />
                <FaCloudUploadAlt color="#FFF5F5" size={70} />
              </UploadContent>
              <UploadText>Enviar comprovante</UploadText>
            </UploadContainer>
          )}
        </Row>
      </Content>
    </Container>
  );
}

export default DepositAtarConfirm;
