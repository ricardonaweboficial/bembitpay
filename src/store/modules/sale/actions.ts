import {
  CreateSale,
  DetailSale,
  SaleActionTypes,
  SALE_CREATE_SUCCESS,
  SALE_CREATE,
  SALE_DETAIL,
  SALE_DETAIL_SUCCESS,
  Sale,
  RegisterSaleRequest,
  SALE_CONFIRM,
  SALE_CONFIRM_SUCCESS,
  SALE_CHECK,
  UploadFileSale,
  SALE_UPLOADFILE,
  SALE_UPLOADFILE_SUCCESS,
  SALE_CHECKATARID,
  SALE_CHECKATARID_SUCCESS,
  RequestCheckAtarId,
  SALE_CANCEL,
  SALE_CANCEL_SUCCESS,
} from "./types";

export function Create(sale: CreateSale): SaleActionTypes {
  return {
    type: SALE_CREATE,
    payload: sale,
  };
}

export function CreateSuccess(sale: Sale): SaleActionTypes {
  return {
    type: SALE_CREATE_SUCCESS,
    payload: sale,
  };
}

export function Detail(sale: DetailSale): SaleActionTypes {
  return {
    type: SALE_DETAIL,
    payload: sale,
  };
}

export function Check(sale: DetailSale): SaleActionTypes {
  return {
    type: SALE_CHECK,
    payload: sale,
  };
}

export function DetailSuccess(sale: Sale): SaleActionTypes {
  return {
    type: SALE_DETAIL_SUCCESS,
    payload: sale,
  };
}

export function RegisterSale(
  confirmSale: RegisterSaleRequest
): SaleActionTypes {
  return {
    type: SALE_CONFIRM,
    payload: confirmSale,
  };
}

export function RegisterSaleSuccess(sale: Sale): SaleActionTypes {
  return {
    type: SALE_CONFIRM_SUCCESS,
    payload: sale,
  };
}

export function Upload(ploadFileSale: UploadFileSale): SaleActionTypes {
  return {
    type: SALE_UPLOADFILE,
    payload: ploadFileSale,
  };
}

export function UploadSuccess(uploared: Boolean): SaleActionTypes {
  return {
    type: SALE_UPLOADFILE_SUCCESS,
    payload: uploared,
  };
}

export function CheckAtarId(
  requestCheckAtarId: RequestCheckAtarId
): SaleActionTypes {
  return {
    type: SALE_CHECKATARID,
    payload: requestCheckAtarId,
  };
}

export function CheckAtarIdSuccess(check: boolean): SaleActionTypes {
  return {
    type: SALE_CHECKATARID_SUCCESS,
    payload: check,
  };
}

export function Cancel(token: string): SaleActionTypes {
  return {
    type: SALE_CANCEL,
    payload: token,
  };
}

export function CancelSuccess(): SaleActionTypes {
  return {
    type: SALE_CANCEL_SUCCESS,
    payload: {},
  };
}
