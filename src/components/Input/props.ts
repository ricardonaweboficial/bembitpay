import { CSSProperties } from "react";
export interface InputProps {
  label?: string;
  value?: string;
  name?: string;
  onChange?: Function;
  disabled?: boolean;
  onFocus?: Function;
  onBlur?: Function;
  style?: CSSProperties;
  type?: string;
  mask?: string;
}
