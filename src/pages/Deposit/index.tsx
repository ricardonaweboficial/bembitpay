import React, { useEffect, ReactElement } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { useHistory, RouteComponentProps } from "react-router-dom";
import { Title, Button, Card } from "../../components";
import { GeneralState, ListItems } from "../../store/modules/general/types";
import CarouselComponent from "../../components/Carousel";
import { DepositParams } from "./types";
import { listDepositsTypes } from "../../store/modules/general/actions";
import { Detail, Cancel } from "../../store/modules/deposit/actions";

import { Container, TitleContainer, Content, ContainerButton } from "./styles";
import { DepositState } from "../../store/modules/deposit/types";

function Deposit({ match }: RouteComponentProps<DepositParams>): ReactElement {
  const dispatch = useDispatch();
  const { deposits }: GeneralState = useSelector(
    (state: any) => state.general,
    shallowEqual
  );

  const { deposit }: DepositState = useSelector(
    (state: any) => state.deposit,
    shallowEqual
  );

  const cancel = () => {
    const { token } = deposit;
    dispatch(Cancel(String(token)));
  };

  useEffect(() => {
    const { token } = match.params;
    dispatch(listDepositsTypes());
    dispatch(Detail({ token, loading: true }));
  }, [dispatch]);

  return (
    <div className="container pt-5">
      <Card
        title={"Estamos carregando seu pagamento"}
        >
        <>
          <div className="mt-5">
            <Content>
              <CarouselComponent items={deposits} type={"deposit"} />
             
            </Content>
           
          </div>          
        </>
      </Card>
    </div>
    
  );
}

export default Deposit;
