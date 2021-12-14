import { DepositActionTypes, USER_DEFINE_TOKEN } from "./types";

export function DefineToken(token: string): DepositActionTypes {
  return {
    type: USER_DEFINE_TOKEN,
    payload: token,
  };
}
