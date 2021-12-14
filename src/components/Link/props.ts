import { CSSProperties } from "react";

export interface LinkProps {
  text: string;
  link: string;
  target?: string;
  styleLink?: CSSProperties;
}
