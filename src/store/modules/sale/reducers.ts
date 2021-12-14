import produce from "immer";

import {
  SaleState,
  SaleActionTypes,
  SALE_CREATE_SUCCESS,
  Sale,
  SALE_CONFIRM_SUCCESS,
  SALE_UPLOADFILE_SUCCESS,
  SALE_CHECKATARID_SUCCESS,
} from "./types";

const initialState: SaleState = {
  uploaded: false,
  exists: false,
  atarChecked: false,
  sales: [],
  sale: {
    name: "",
    email: "",
    phone: "",
    quantity: 0,
    payment_url: "11111111",
    type: "",
    token: "",
    amount_receivable: 0,
    fee: 0,
    fee_fixed: 0,
    fee_percent: 0,
    fee_percent_total: 0,
    total_pay: 0,
  },
  accountAtar: {
    atarid: "6584400821092352",
    name: "COINBR SERVICOS DIGITAIS LTDA",
  },
  accountBank: {
    branch: "0001",
    name: "COINBR SERVICOS DIGITAIS LTDA",
    document: "11.768.654/0001-86",
    number: "967514-1",
    bank: "197",
    bankName: "Stone Pagamentos S.A.",
  },
};
export default function sale(state = initialState, action: SaleActionTypes) {
  switch (action.type) {
    case SALE_CONFIRM_SUCCESS:
      return produce(state, (draft) => {
        let newSale: Sale = {
          ...state.sale,
          ...action.payload,
        };
        draft.sale = newSale;
      });
    case SALE_CREATE_SUCCESS:
      return produce(state, (draft) => {
        console.log("action.payload", action.payload);
        let newSale: Sale = { ...state.sale, ...action.payload };
        draft.sale = newSale;
      });
    case SALE_UPLOADFILE_SUCCESS:
      return produce(state, (draft) => {
        draft.uploaded = action.payload;
      });
    case SALE_UPLOADFILE_SUCCESS:
      return produce(state, (draft) => {
        draft.uploaded = action.payload;
      });
    case SALE_CHECKATARID_SUCCESS:
      return produce(state, (draft) => {
        draft.exists = action.payload;
        draft.atarChecked = true;
      });
    default:
      return state;
  }
}
