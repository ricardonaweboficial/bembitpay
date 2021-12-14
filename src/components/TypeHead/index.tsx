import React, { ReactElement, useState, useEffect } from "react";
import "react-multi-carousel/lib/styles.css";
import { TypeHeadProps } from "./props";

import { Input } from "../";
import {
  Container,
  Content,
  Label,
  OptionContainer,
  OptionItem,
} from "./styles";

function TypeHeadComponent({
  options,
  label,
  onChange,
  name,
}: TypeHeadProps): ReactElement {
  const [state, setState] = useState({
    value: "",
    show: false,
  });

  const setValue = (e: React.FormEvent<HTMLInputElement>) => {
    setValueState(e.currentTarget.name, e.currentTarget.value);
  };

  const setValueState = (field: string, value: any) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  const SelectItem = (code: string, name: string) => {
    setState({
      ...state,
      value: `${code}  -  ${name}`,
      show: false,
    });
    onChange(code, name);
  };

  const onFocus = (e: React.FormEvent<HTMLInputElement>) => {
    setState({
      ...state,
      show: true,
    });
  };

  const toggle = (show: boolean) => {
    setState({
      ...state,
      show: show,
    });
  };
  var re = new RegExp("" + state.value + ".*", "");
  return (
    <Container
      onMouseLeave={() => toggle(false)}
      onMouseEnter={() => toggle(true)}
    >
      <Input
        name={"value"}
        label={label}
        onChange={setValue}
        value={state.value}
        onFocus={onFocus}
      />
      <OptionContainer
        style={{ display: state.show && options.length > 0 ? "flex" : "none" }}
      >
        {state.show &&
          options.length > 0 &&
          options
            .filter((item) => re.test(item.code + item.name))
            .map((item: any) => (
              <OptionItem onClick={() => SelectItem(item.code, item.name)}>
                {item.code} - {item.name}
              </OptionItem>
            ))}
      </OptionContainer>
    </Container>
  );
}

export default TypeHeadComponent;
