import {
  CreateDeposit,
  DetailDeposit,
  DepositActionTypes,
  DEPOSIT_CREATE_SUCCESS,
  DEPOSIT_CREATE,
  DEPOSIT_DETAIL,
  DEPOSIT_DETAIL_SUCCESS,
  Deposit,
  ConfirmDeposit,
  DEPOSIT_CONFIRM,
  DEPOSIT_CONFIRM_SUCCESS,
  DEPOSIT_CHECK,
  UploadFileDeposit,
  DEPOSIT_UPLOADFILE,
  DEPOSIT_UPLOADFILE_SUCCESS,
  DEPOSIT_CHECKATARID,
  DEPOSIT_CHECKATARID_SUCCESS,
  RequestCheckAtarId,
  DEPOSIT_CANCEL,
  DEPOSIT_CANCEL_SUCCESS,
} from "./types";

export function Create(deposit: CreateDeposit): DepositActionTypes {
  return {
    type: DEPOSIT_CREATE,
    payload: deposit,
  };
}

export function CreateSuccess(deposit: Deposit): DepositActionTypes {
  return {
    type: DEPOSIT_CREATE_SUCCESS,
    payload: deposit,
  };
}

export function Detail(deposit: DetailDeposit): DepositActionTypes {
  return {
    type: DEPOSIT_DETAIL,
    payload: deposit,
  };
}

export function Check(deposit: DetailDeposit): DepositActionTypes {
  return {
    type: DEPOSIT_CHECK,
    payload: deposit,
  };
}

export function DetailSuccess(deposit: Deposit): DepositActionTypes {
  return {
    type: DEPOSIT_DETAIL_SUCCESS,
    payload: deposit,
  };
}

export function Confirm(confirmDeposit: ConfirmDeposit): DepositActionTypes {
  return {
    type: DEPOSIT_CONFIRM,
    payload: confirmDeposit,
  };
}

export function ConfirmSuccess(deposit: Deposit): DepositActionTypes {
  return {
    type: DEPOSIT_CONFIRM_SUCCESS,
    payload: deposit,
  };
}

export function Upload(
  ploadFileDeposit: UploadFileDeposit
): DepositActionTypes {
  return {
    type: DEPOSIT_UPLOADFILE,
    payload: ploadFileDeposit,
  };
}

export function UploadSuccess(uploared: Boolean): DepositActionTypes {
  return {
    type: DEPOSIT_UPLOADFILE_SUCCESS,
    payload: uploared,
  };
}

export function CheckAtarId(
  requestCheckAtarId: RequestCheckAtarId
): DepositActionTypes {
  return {
    type: DEPOSIT_CHECKATARID,
    payload: requestCheckAtarId,
  };
}

export function CheckAtarIdSuccess(check: boolean): DepositActionTypes {
  return {
    type: DEPOSIT_CHECKATARID_SUCCESS,
    payload: check,
  };
}

export function Cancel(token: string): DepositActionTypes {
  return {
    type: DEPOSIT_CANCEL,
    payload: token,
  };
}

export function CancelSuccess(): DepositActionTypes {
  return {
    type: DEPOSIT_CANCEL_SUCCESS,
    payload: {},
  };
}
