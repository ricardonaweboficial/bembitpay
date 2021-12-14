import React, { useEffect, ReactElement } from "react";
import "react-multi-carousel/lib/styles.css";
import { ReceiptProps } from "./props";

import { Container, Body, Header } from "./styles";

function ReceiptComponent({
  title,
  children,
  bgHeader,
  styleContent,
}: ReceiptProps): ReactElement {
  return (
    <Container>
      <Header style={{ backgroundColor: bgHeader }}>{title}</Header>
      <Body style={styleContent}>{children}</Body>
    </Container>
  );
}

export default ReceiptComponent;
