import React, { useEffect, ReactElement } from "react";
import "react-multi-carousel/lib/styles.css";
import { ButtonProps } from "./props";

import { Container, Button } from "./styles";

function ButtonComponent({
  onClick,
  text,
  className,
  styleButton,
}: ButtonProps): ReactElement {
  return (
    <Button className={"btn text-center text-white " + className } style={styleButton} onClick={() => onClick()}>
      <span>{text}</span>
    </Button>
  );
}

export default ButtonComponent;
