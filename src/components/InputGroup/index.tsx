import React, { ReactElement } from "react";

import { Container, Content } from "./styles";

import { InputGroupProps } from "./props";

function InputGroupComponent({ children }: InputGroupProps): ReactElement {
  return (
    <div className="form-group">
      {children}
    </div>
  );
}

export default InputGroupComponent;
