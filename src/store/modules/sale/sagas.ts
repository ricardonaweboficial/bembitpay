import {
  all,
  takeLatest,
  put,
  call,
  select,
  takeEvery,
} from "redux-saga/effects";

import { RegisterSaleSuccess, CreateSuccess } from "./actions";
import apiSale from "../../../services/apiSale";
import { Loading } from "../general/actions";

import { RegisterSaleAction, Sale, SALE_CHECK, SALE_CONFIRM } from "./types";

import history from "../../../services/history";

import { SALE_CREATE, CreteSaleAction, DetailSaleAction } from "./types";

const getSale = (state: any) => state.sale;

export function* CreateSale(action: CreteSaleAction) {
  const createSale = action.payload;
  const { sale } = yield select(getSale);

  let saleCreate: Sale = {
    ...sale,
    name: createSale?.name,
    document: createSale?.document,
    birth_date: createSale?.birth_date,
    phone: createSale?.phone,
    email: createSale?.email,
    quantity: createSale?.quantity,
    payment_url: "11111111111111111",
    total_pay: createSale.total_pay,
    fee: createSale.fee,
    address: createSale.address,
  };

  yield put(CreateSuccess(saleCreate));

  history.push(`/sale/confirm`);
}

export function* CheckSale(action: DetailSaleAction) {
  const detailSale = action.payload;
  try {
    const { data } = yield call(
      apiSale.get,
      `/client/sale/${detailSale.token}`
    );
    yield put(CreateSuccess(data.sale));
    yield put(Loading(false));
  } catch (error) {
    console.log(error);
  } finally {
  }
}

export function* RegisterSale(action: RegisterSaleAction) {
  const { sale } = yield select(getSale);
  yield put(Loading(true));
  const detailSale = action.payload;
  let saleCreate: any = {
    email: sale.email,
    name: sale.name,
    quantity: detailSale.quantity,
    address: sale.address,
  };
  try {
    const { data } = yield call(apiSale.post, `/client/sale`, saleCreate);
    data.total_pay = parseFloat(data.total_pay);
    data.fee = parseFloat(data.fee);
    yield put(RegisterSaleSuccess(data));
    yield put(Loading(false));
    history.push(`/deposit/${data.token}`);
  } catch (error) {
    console.log(error);
  } finally {
  }
}

export default all([
  takeLatest(SALE_CREATE, CreateSale),
  takeLatest(SALE_CONFIRM, RegisterSale),
  takeEvery(SALE_CHECK, CheckSale),
]);
