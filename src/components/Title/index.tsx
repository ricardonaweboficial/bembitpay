import React, { useEffect, ReactElement } from "react";

import { TitleProps } from "./props";

import {
  Container,
  TitleContainer,
  SubTitleContainer,
  Division,
} from "./styles";

function Title({ title, subtitle }: TitleProps): ReactElement {
  return (
    <Container>
      <TitleContainer>{title}</TitleContainer>
      <Division />
      <SubTitleContainer>{subtitle}</SubTitleContainer>
    </Container>
  );
}

export default Title;
