import produce from "immer";

import {
  DepositState,
  DepositActionTypes,
  DEPOSIT_CREATE_SUCCESS,
  Deposit,
  DEPOSIT_CONFIRM_SUCCESS,
  DEPOSIT_UPLOADFILE_SUCCESS,
  DEPOSIT_CHECKATARID_SUCCESS,
} from "./types";

const initialState: DepositState = {
  uploaded: false,
  exists: false,
  atarChecked: false,
  deposits: [],
  deposit: {
    payment_url: "11111111",
    type: "",
    amount: 0,
    token: "",
    amount_receivable: 0,
    fee: 0,
    fee_fixed: 0,
    fee_percent: 0,
    fee_percent_total: 0,
    amount_float: 0,
  },
  accountAtar: {
    atarid: "6584400821092352",
    name: "COINBR",
  },
  accountBank: {
    branch: "1011",
    name: "KIRON PAY PAGAMENTOS LTDA ",
    document: "34.544.987/0001-27",
    number: "4686-5",
    bank: "104",
    bankName: "CAIXA ECONOMICA FEDERAL",
    pixKey: "caixa@kironpay.com.br",
  },
};
export default function deposit(
  state = initialState,
  action: DepositActionTypes
) {
  switch (action.type) {
    case DEPOSIT_CONFIRM_SUCCESS:
    case DEPOSIT_CREATE_SUCCESS:
      return produce(state, (draft) => {
        let newDeposit: Deposit = { ...state.deposit, ...action.payload };
        draft.deposit = newDeposit;
      });
    case DEPOSIT_UPLOADFILE_SUCCESS:
      return produce(state, (draft) => {
        draft.uploaded = action.payload;
      });
    case DEPOSIT_UPLOADFILE_SUCCESS:
      return produce(state, (draft) => {
        draft.uploaded = action.payload;
      });
    case DEPOSIT_CHECKATARID_SUCCESS:
      return produce(state, (draft) => {
        draft.exists = action.payload;
        draft.atarChecked = true;
      });
    default:
      return state;
  }
}
