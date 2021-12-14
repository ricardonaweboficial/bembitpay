import React, { useEffect, ReactElement } from "react";
import "react-multi-carousel/lib/styles.css";
import { ReceiptWithdrawProps } from "./props";

import { ContainerTutorial, Body, Header } from "./styles";

function ReceiptWithdrawComponent({
  body,
  title,
}: ReceiptWithdrawProps): ReactElement {
  return (
    <ContainerTutorial>
      <div className="title">{title}</div>
      <div className="content">{body}</div>
    </ContainerTutorial>
  );
}

export default ReceiptWithdrawComponent;
