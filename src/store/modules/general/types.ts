export const GENERAL_INITIAL = "@general/INITIAL";

export const GENERAL_LOADING = "@general/LOADING";
export const GET_BANKS = "@withdraw/GET_BANKS";
export const GET_BANKS_SUCCESS = "@withdraw/GET_BANKS_SUCCESS";
export const LIST_DEPOSIT_TYPES = "@general/LIST_DEPOSIT_TYPES";
export const LIST_DEPOSIT_TYPES_SUCCESS = "@general/LIST_DEPOSIT_TYPES_SUCCESS";

export const GET_SALE_TYPES = "@general/GET_SALE_TYPES";
export const GET_SALE_TYPES_SUCCESS = "@general/GET_SALE_TYPES_SUCCESS";

export const LIST_WITHDRAW_TYPES = "@general/LIST_WITHDRAW_TYPES";
export const LIST_WITHDRAW_TYPES_SUCCESS =
  "@general/LIST_WITHDRAW_TYPES_SUCCESS";
export const GOTO_HOME = "@general/GOTO_HOME";

export interface ItemFee {
  absolut?: number;
  percent?: number;
}

export interface Item {
  name?: string;
  type?: string;
  fee?: ItemFee;
}

export interface Bank {
  id: number;
  ispb: string;
  code: string;
  name: string;
  short_name: string;
}

export interface Sale {
  price: number;
}

export interface GetBanksAction {
  type: typeof GET_BANKS;
}

export interface GetBanksSuccessAction {
  type: typeof GET_BANKS_SUCCESS;
  payload: Array<Bank>;
}

export interface ListItems extends Array<Item> {}

export interface General {
  name: string;
}

export interface Token {
  protocol: string;
  token: string;
}

export interface GeneralState {
  deposits: ListItems;
  withdraws: ListItems;
  loading: boolean;
  banks: Array<Bank>;
  salePrice: Sale;
}

interface InitialAction {
  type: typeof GENERAL_INITIAL;
  payload: any;
}

interface ListDepositTypesSuccessAction {
  type: typeof LIST_DEPOSIT_TYPES_SUCCESS;
  payload: ListItems;
}

interface ListDepositTypesAction {
  type: typeof LIST_DEPOSIT_TYPES;
  payload: any;
}

interface ListWithdrawTypesSuccessAction {
  type: typeof LIST_WITHDRAW_TYPES_SUCCESS;
  payload: ListItems;
}

interface ListWithdrawTypesAction {
  type: typeof LIST_WITHDRAW_TYPES;
  payload: any;
}

interface LoadingTypesAction {
  type: typeof GENERAL_LOADING;
  payload: boolean;
}

interface GotoHomeTypesAction {
  type: typeof GOTO_HOME;
  payload: {};
}

export interface GetSaleTypesAction {
  type: typeof GET_SALE_TYPES;
}

interface GetSaleTypesSuccessAction {
  type: typeof GET_SALE_TYPES_SUCCESS;
  payload: Sale;
}

export type GeneralActionTypes =
  | ListDepositTypesSuccessAction
  | ListDepositTypesAction
  | ListWithdrawTypesSuccessAction
  | ListWithdrawTypesAction
  | LoadingTypesAction
  | GotoHomeTypesAction
  | GetBanksAction
  | GetBanksSuccessAction
  | GetSaleTypesAction
  | GetSaleTypesSuccessAction;
