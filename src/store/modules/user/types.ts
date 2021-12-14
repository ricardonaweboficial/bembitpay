export const USER_DEFINE_TOKEN = "@USER/DEFINE_TOKEN";

export interface UserState {
  token: string;
}

export interface DefineTokenAction {
  type: typeof USER_DEFINE_TOKEN;
  payload: string;
}

export type DepositActionTypes = DefineTokenAction;
