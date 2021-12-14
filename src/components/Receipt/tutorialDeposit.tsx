import React, { useEffect, ReactElement } from "react";
import "react-multi-carousel/lib/styles.css";
import { TutorialDepositProps } from "./props";

import { ContainerTutorial, Body, Header } from "./styles";

import tutorialWallet from "../../assets/images/wallet-tutorial.png"

import tutorialWallet2 from "../../assets/images/wallet-tutorial2.png"

function ReceiptTutorialDepositComponent({ title }: TutorialDepositProps): ReactElement {
  return (
    <ContainerTutorial>
      <h2>Você pode verificar o valor na sua conta da X</h2>
      <div className="content">
        <div className="label">
            Clique em :
        </div>
        <img className="img" src={tutorialWallet} width={75} height={73} />
        <div className="label">
          Seu deposito é creditado na sua Wallet Ras
        </div>
        <img className="img" src={tutorialWallet2}  width={122} height={103}/>
      </div>
    </ContainerTutorial>
  );
}

export default ReceiptTutorialDepositComponent;
