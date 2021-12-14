import {
  ListItems,
  GeneralActionTypes,
  GENERAL_INITIAL,
  LIST_DEPOSIT_TYPES_SUCCESS,
  LIST_WITHDRAW_TYPES,
  LIST_WITHDRAW_TYPES_SUCCESS,
  LIST_DEPOSIT_TYPES,
  GENERAL_LOADING,
  GOTO_HOME,
  GET_BANKS,
  Bank,
  GET_BANKS_SUCCESS,
  Sale,
  GET_SALE_TYPES_SUCCESS,
  GET_SALE_TYPES,
} from "./types";

export function initial() {
  return {
    type: GENERAL_INITIAL,
    payload: {},
  };
}

export function listDepositsTypes(): GeneralActionTypes {
  return {
    type: LIST_DEPOSIT_TYPES,
    payload: {},
  };
}

export function listWithdrawsTypes(): GeneralActionTypes {
  return {
    type: LIST_WITHDRAW_TYPES,
    payload: {},
  };
}

export function listWithdrawTypesSuccess(
  withdraws: ListItems
): GeneralActionTypes {
  return {
    type: LIST_WITHDRAW_TYPES_SUCCESS,
    payload: withdraws,
  };
}

export function listDepositsTypesSuccess(
  deposits: ListItems
): GeneralActionTypes {
  return {
    type: LIST_DEPOSIT_TYPES_SUCCESS,
    payload: deposits,
  };
}
export function Loading(loading: boolean): GeneralActionTypes {
  return {
    type: GENERAL_LOADING,
    payload: loading,
  };
}

export function GoToHome(): GeneralActionTypes {
  return {
    type: GOTO_HOME,
    payload: {},
  };
}

export function GetBank(): GeneralActionTypes {
  return {
    type: GET_BANKS,
  };
}

export function GetBankSuccess(banks: Array<Bank>): GeneralActionTypes {
  return {
    type: GET_BANKS_SUCCESS,
    payload: banks,
  };
}

export function GetSale(): GeneralActionTypes {
  return {
    type: GET_SALE_TYPES,
  };
}

export function GetSaleSuccess(sale: Sale): GeneralActionTypes {
  return {
    type: GET_SALE_TYPES_SUCCESS,
    payload: sale,
  };
}
