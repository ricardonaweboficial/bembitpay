export const SALE_CREATE = "@sale/CREATE";

export const SALE_CREATE_SUCCESS = "@sale/CREATE_SUCCESS";
export const SALE_DETAIL = "@sale/DETAIL";
export const SALE_CHECK = "@sale/CHECK";
export const SALE_DETAIL_SUCCESS = "@sale/DETAIL_SUCCESS";

export const SALE_CONFIRM = "@sale/CONFIRM";
export const SALE_CONFIRM_SUCCESS = "@sale/CONFIRM_SUCCESS";

export const SALE_UPLOADFILE = "@sale/UPLOADFILE";
export const SALE_UPLOADFILE_SUCCESS = "@sale/UPLOADFILE_SUCCESS";

export const SALE_CHECKATARID = "@sale/CHECKATARID";
export const SALE_CHECKATARID_SUCCESS = "@sale/CHECKATARID_SUCCESS";

export const SALE_CANCEL = "@sale/CANCEL";
export const SALE_CANCEL_SUCCESS = "@sale/CANCEL_SUCCESS";

export interface SaleState {
  sales: [];
  sale: Sale;
  accountAtar: AccountAtar;
  accountBank: AccountBank;
  uploaded: Boolean;
  exists: boolean;
  atarChecked: boolean;
}

export interface CreateSale {
  name?: string;
  email?: string;
  document?: string;
  birth_date?: string;
  phone?: string;
  quantity?: number;
  total_pay: number;
  fee?: number;
  address: string;
}

export interface UploadFileSale {
  form: FormData;
  token: string;
}

export interface RegisterSaleRequest {
  name?: string;
  document?: string;
  birth_date?: string;
  email?: string;
  phone?: string;
  quantity?: number;
  address: string;
}

export interface RequestCheckAtarId {
  atarid?: string;
}

export interface DetailSale {
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
}

export interface Sale {
  name: string;
  email: string;
  phone: string;
  quantity: number;
  document: string;
  birth_date: string;
  // ok
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
  total_pay: number;
  address: string;
}

export interface CreteSaleAction {
  type: typeof SALE_CREATE;
  payload: CreateSale;
}

interface CreteSaleSuccessAction {
  type: typeof SALE_CREATE_SUCCESS;
  payload: Sale;
}

export interface CheckAtarIDAction {
  type: typeof SALE_CHECKATARID;
  payload: RequestCheckAtarId;
}

interface CheckAtarIDSuccessAction {
  type: typeof SALE_CHECKATARID_SUCCESS;
  payload: boolean;
}

export interface DetailSaleAction {
  type: typeof SALE_DETAIL;
  payload: DetailSale;
}

export interface CheckSaleAction {
  type: typeof SALE_CHECK;
  payload: DetailSale;
}

export interface RegisterSaleAction {
  type: typeof SALE_CONFIRM;
  payload: RegisterSaleRequest;
}

export interface UploadFileSaleAction {
  type: typeof SALE_UPLOADFILE;
  payload: UploadFileSale;
}

interface UploadFileSuccessAction {
  type: typeof SALE_UPLOADFILE_SUCCESS;
  payload: Boolean;
}

interface RegisterSaleSuccessAction {
  type: typeof SALE_CONFIRM_SUCCESS;
  payload: Sale;
}

interface DetailSaleSuccessAction {
  type: typeof SALE_DETAIL_SUCCESS;
  payload: Sale;
}

export interface CancelSaleAction {
  type: typeof SALE_CANCEL;
  payload: string;
}

interface CancelSaleSuccessAction {
  type: typeof SALE_CANCEL_SUCCESS;
  payload: {};
}

export type SaleActionTypes =
  | CreteSaleAction
  | CreteSaleSuccessAction
  | DetailSaleAction
  | DetailSaleSuccessAction
  | RegisterSaleAction
  | RegisterSaleSuccessAction
  | CheckSaleAction
  | UploadFileSaleAction
  | UploadFileSuccessAction
  | CheckAtarIDAction
  | CheckAtarIDSuccessAction
  | CancelSaleAction
  | CancelSaleSuccessAction;
