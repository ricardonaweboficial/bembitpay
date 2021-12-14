import { CSSProperties } from "react";

export interface ReceiptProps {
  title: string;
  children: JSX.Element;
  bgHeader?: string;
  styleContent?: CSSProperties;
}

export interface TutorialDepositProps {
  title?: string;
}

export interface ReceiptWithdrawProps {
  body?: string;
  title: string;
}
