import { USER_DEFINE_TOKEN } from "../store/modules/user/types";

let currentAuthToken: string = "";

export function setToken(token: string) {
  currentAuthToken = token;
}

export function getToken() {
  return currentAuthToken;
}

//Middleware do redux obtem o token
export const middlewareToken = (store: any) => (next: any) => (action: any) => {
  if (action.type === USER_DEFINE_TOKEN) {
    setToken(action.payload);
  }
  return next(action);
};
