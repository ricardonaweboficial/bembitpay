import produce from "immer";
import { DepositActionTypes, UserState, USER_DEFINE_TOKEN } from "./types";

const initialState: UserState = {
  token: "",
};
export default function user(state = initialState, action: DepositActionTypes) {
  switch (action.type) {
    case USER_DEFINE_TOKEN:
      return produce(state, (draft) => {
        draft.token = action.payload;
      });
    default:
      return state;
  }
}
