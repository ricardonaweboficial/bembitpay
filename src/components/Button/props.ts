import { CSSProperties } from "react";

export interface ButtonProps {
  onClick: Function;
  text: string;
  className?: string;
  styleButton?: CSSProperties;
}
