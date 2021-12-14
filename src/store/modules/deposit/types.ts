export const DEPOSIT_CREATE = "@deposit/CREATE";

export const DEPOSIT_CREATE_SUCCESS = "@deposit/CREATE_SUCCESS";
export const DEPOSIT_DETAIL = "@deposit/DETAIL";
export const DEPOSIT_CHECK = "@deposit/CHECK";
export const DEPOSIT_DETAIL_SUCCESS = "@deposit/DETAIL_SUCCESS";

export const DEPOSIT_CONFIRM = "@deposit/CONFIRM";
export const DEPOSIT_CONFIRM_SUCCESS = "@deposit/CONFIRM_SUCCESS";

export const DEPOSIT_UPLOADFILE = "@deposit/UPLOADFILE";
export const DEPOSIT_UPLOADFILE_SUCCESS = "@deposit/UPLOADFILE_SUCCESS";

export const DEPOSIT_CHECKATARID = "@deposit/CHECKATARID";
export const DEPOSIT_CHECKATARID_SUCCESS = "@deposit/CHECKATARID_SUCCESS";

export const DEPOSIT_CANCEL = "@deposit/CANCEL";
export const DEPOSIT_CANCEL_SUCCESS = "@deposit/CANCEL_SUCCESS";

export interface DepositState {
  deposits: [];
  deposit: Deposit;
  accountAtar: AccountAtar;
  accountBank: AccountBank;
  uploaded: Boolean;
  exists: boolean;
  atarChecked: boolean;
}

export interface CreateDeposit {
  amount: number;
  type: string;
  atarid?: string;
  account?: AccountBank;
  token?: string;
  amount_float: number;
}

export interface UploadFileDeposit {
  form: FormData;
  token: string;
}

export interface ConfirmDeposit {
  amount: number;
  type: string;
  token?: string;
  atarid?: string;
  account?: AccountBank;
  amount_float: number;
}

export interface RequestCheckAtarId {
  atarid?: string;
}

export interface DetailDeposit {
  token: string;
  loading: Boolean;
}

export interface AccountAtar {
  name: string;
  atarid: string;
}

export interface AccountBank {
  branch: string;
  name?: string;
  document?: string;
  number?: string;
  bank?: string;
  bankName?: string;
  operation?: string;
  bank_number?: string;
  pixKey?: string;
}

export interface Deposit {
  amount: number;
  amount_float: number;
  total?: number;
  type: string;
  atarid?: string;
  token?: string;
  account?: AccountBank;
  payment_url: string;
  status?: string;
  amount_receivable: number;
  fee: number;
  fee_fixed: number;
  fee_percent: number;
  fee_percent_total: number;
}

export interface CreteDepositAction {
  type: typeof DEPOSIT_CREATE;
  payload: CreateDeposit;
}

interface CreteDepositSuccessAction {
  type: typeof DEPOSIT_CREATE_SUCCESS;
  payload: Deposit;
}

export interface CheckAtarIDAction {
  type: typeof DEPOSIT_CHECKATARID;
  payload: RequestCheckAtarId;
}

interface CheckAtarIDSuccessAction {
  type: typeof DEPOSIT_CHECKATARID_SUCCESS;
  payload: boolean;
}

export interface DetailDepositAction {
  type: typeof DEPOSIT_DETAIL;
  payload: DetailDeposit;
}

export interface CheckDepositAction {
  type: typeof DEPOSIT_CHECK;
  payload: DetailDeposit;
}

export interface ConfirmDepositAction {
  type: typeof DEPOSIT_CONFIRM;
  payload: CreateDeposit;
}

export interface UploadFileDepositAction {
  type: typeof DEPOSIT_UPLOADFILE;
  payload: UploadFileDeposit;
}

interface UploadFileSuccessAction {
  type: typeof DEPOSIT_UPLOADFILE_SUCCESS;
  payload: Boolean;
}

interface ConfirmDepositSuccessAction {
  type: typeof DEPOSIT_CONFIRM_SUCCESS;
  payload: Deposit;
}

interface DetailDepositSuccessAction {
  type: typeof DEPOSIT_DETAIL_SUCCESS;
  payload: Deposit;
}

export interface CancelDepositAction {
  type: typeof DEPOSIT_CANCEL;
  payload: string;
}

interface CancelDepositSuccessAction {
  type: typeof DEPOSIT_CANCEL_SUCCESS;
  payload: {};
}

export type DepositActionTypes =
  | CreteDepositAction
  | CreteDepositSuccessAction
  | DetailDepositAction
  | DetailDepositSuccessAction
  | ConfirmDepositAction
  | ConfirmDepositSuccessAction
  | CheckDepositAction
  | UploadFileDepositAction
  | UploadFileSuccessAction
  | CheckAtarIDAction
  | CheckAtarIDSuccessAction
  | CancelDepositAction
  | CancelDepositSuccessAction;
