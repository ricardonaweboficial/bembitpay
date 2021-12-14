import { CSSProperties } from "react";

export interface CardProps {
  title?: string;
  subtitle?: string;
  titleElement?: JSX.Element;
  children: JSX.Element;
}
