import produce from "immer";

import {
  GeneralState,
  GeneralActionTypes,
  LIST_DEPOSIT_TYPES_SUCCESS,
  LIST_WITHDRAW_TYPES_SUCCESS,
  GENERAL_LOADING,
  GET_BANKS_SUCCESS,
  GET_SALE_TYPES_SUCCESS,
} from "./types";

const initialState: GeneralState = {
  deposits: [],
  withdraws: [],
  loading: false,
  banks: [],
  salePrice: {
    price: 0,
  },
};
export default function general(
  state = initialState,
  action: GeneralActionTypes
) {
  switch (action.type) {
    case LIST_DEPOSIT_TYPES_SUCCESS:
      return produce(state, (draft) => {
        draft.deposits = action.payload;
      });
    case LIST_WITHDRAW_TYPES_SUCCESS:
      return produce(state, (draft) => {
        draft.withdraws = action.payload;
      });
    case GENERAL_LOADING:
      return produce(state, (draft) => {
        draft.loading = action.payload;
      });
    case GET_BANKS_SUCCESS:
      return produce(state, (draft) => {
        draft.banks = action.payload;
      });
    case GET_SALE_TYPES_SUCCESS:
      return produce(state, (draft) => {
        draft.salePrice = action.payload;
      });
    default:
      return state;
  }
}
