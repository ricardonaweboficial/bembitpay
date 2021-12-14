import { all, takeLatest, put, call, select, delay } from "redux-saga/effects";
import apiPayment from "../../../services/apiPayment";
import apiSale from "../../../services/apiSale";

import {
  GetBankSuccess,
  GetSaleSuccess,
  listDepositsTypesSuccess,
  listWithdrawTypesSuccess,
  Loading,
} from "./actions";
import {
  GOTO_HOME,
  ListItems,
  GetSaleTypesAction,
  GET_SALE_TYPES,
} from "./types";

import history from "../../../services/history";

import {
  LIST_DEPOSIT_TYPES,
  LIST_WITHDRAW_TYPES,
  GET_BANKS,
  GetBanksAction,
} from "./types";

export function* ListTypes() {
  yield put(Loading(true));
  try {
    const { data } = yield call(apiPayment.get, `/partner/fees`);
    let deposits = data.filter((item: any) => item.type.search("deposit") > -1);
    deposits.forEach((item: any) => {
      item.type = item.type.replace("deposit_", "");
      item.fee = JSON.parse(item.fee);
    });
    let withdraws = data.filter(
      (item: any) => item.type.search("withdraw") > -1
    );
    withdraws.forEach((item: any) => {
      item.type = item.type.replace("withdraw_", "");
      item.fee = JSON.parse(item.fee);
    });
    yield put(listDepositsTypesSuccess(deposits));
    yield put(listWithdrawTypesSuccess(withdraws));
    yield delay(1000);
    yield put(Loading(false));
  } catch (error) {
  } finally {
  }
}

export function* GoToHome() {
  history.push(`/`);
}

export function* RequestBanks(action: GetBanksAction) {
  try {
    const { data } = yield call(apiPayment.get, `/partner/banks`);
    yield put(GetBankSuccess(data.data));
  } catch (error) {
    console.log(error);
  } finally {
  }
}

export function* RequestSale(action: GetSaleTypesAction) {
  try {
    const { data } = yield call(apiSale.get, `/client/sale`);
    yield put(GetSaleSuccess(data));
  } catch (error) {
    console.log(error);
  } finally {
  }
}

export default all([
  takeLatest(LIST_DEPOSIT_TYPES, ListTypes),
  takeLatest(LIST_WITHDRAW_TYPES, ListTypes),
  takeLatest(GET_SALE_TYPES, RequestSale),
  takeLatest(GOTO_HOME, GoToHome),
  takeLatest(GET_BANKS, RequestBanks),
]);
