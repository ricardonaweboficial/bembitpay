import {
  all,
  takeLatest,
  put,
  call,
  select,
  delay,
  takeEvery,
} from "redux-saga/effects";

import {
  ConfirmSuccess,
  CreateSuccess,
  UploadSuccess,
  CheckAtarIdSuccess,
  Confirm,
} from "./actions";
import apiPayment from "../../../services/apiPayment";
import { DefineToken } from "../user/actions";
import { Loading } from "../general/actions";

import {
  CancelDepositAction,
  CheckAtarIDAction,
  ConfirmDepositAction,
  Deposit,
  DEPOSIT_CANCEL,
  DEPOSIT_CHECK,
  DEPOSIT_CHECKATARID,
  DEPOSIT_CONFIRM,
  DEPOSIT_UPLOADFILE,
  UploadFileDepositAction,
} from "./types";

import history from "../../../services/history";

import { Token } from "../general/types";

import {
  DEPOSIT_CREATE,
  DEPOSIT_DETAIL,
  CreteDepositAction,
  DetailDepositAction,
} from "./types";
import { act } from "@testing-library/react";

const getDeposit = (state: any) => state.deposit;

export function* CreateDeposit(action: CreteDepositAction) {
  const createDepost = action.payload;
  const { deposit } = yield select(getDeposit);

  let depositCreate: Deposit = {
    ...deposit,
    amount: createDepost.amount,
    amount_float: createDepost.amount_float,
    type: createDepost?.type,
    atarid: createDepost?.atarid,
    payment_url: "11111111111111111",
  };

  yield put(CreateSuccess(depositCreate));

  history.push(`/deposit/info/${createDepost.type}/confirm`);
}

export function* DetailDeposit(action: DetailDepositAction) {
  const { token } = action.payload;
  yield put(Loading(true));
  try {
    const { data } = yield call(apiPayment.get, `/partner/deposit/${token}`);
    const { deposit }: { deposit: Deposit } = data;
    yield put(CreateSuccess(deposit));
    switch (deposit.type) {
      case "bank":
        switch (deposit.status) {
          case "pending-document":
            history.push(`/deposit/info/bank/confirm`);
            // yield put(Loading(false));
            break;
          case "processing":
            yield put(UploadSuccess(true));
            // yield put(Loading(false));
            history.push(`/deposit/info/bank/confirm`);
            break;
        }
        break;
      case "atar":
        switch (deposit.status) {
          case "request":
            history.push(`/deposit/info/atar/confirm`);
            break;
          case "processing":
            yield put(UploadSuccess(true));
            // yield put(Loading(false));
            history.push(`/deposit/info/bank/confirm`);
            break;
        }
        break;
      case "pix":
        switch (deposit.status) {
          case "request":
            yield put(UploadSuccess(true));
            // yield put(Loading(false));
            history.push(`/deposit/info/pix/confirm`);
            break;
          case "processed":
            yield put(UploadSuccess(true));
            // yield put(Loading(false));
            history.push(`/deposit/info/pix/done`);
            break;
        }
        break;
      case "":
        yield put(
          Confirm({
            amount: deposit.amount_float,
            type: "pix",
            amount_float: deposit.amount_float,
          })
        );
        break;
    }
  } catch (error) {
    console.log(error);
  } finally {
  }
}

export function* CheckDeposit(action: DetailDepositAction) {
  const detailDeposit = action.payload;
  try {
    const { data } = yield call(
      apiPayment.get,
      `/partner/deposit/${detailDeposit.token}`
    );
    yield put(CreateSuccess(data.deposit));
    yield put(Loading(false));
  } catch (error) {
    console.log(error);
  } finally {
  }
}

export function* ConfirmDeposit(action: ConfirmDepositAction) {
  const { deposit } = yield select(getDeposit);
  yield put(Loading(true));
  const detailDeposit = action.payload;
  let depositCreate: any = {
    token: deposit.token,
    type: detailDeposit.type,
    amount: detailDeposit.amount,
    atarid: "",
    client_name: "",
    client_document: "",
    client_account: "",
    client_branch: "",
    client_bank_name: "",
    client_bank_number: "",
    client_operation: "",
  };

  switch (depositCreate.type) {
    case "atar":
      depositCreate.atarid = detailDeposit.atarid;
      break;
    case "bank":
      depositCreate.client_name = detailDeposit.account?.name;
      depositCreate.client_document = detailDeposit.account?.document;
      depositCreate.client_account = detailDeposit.account?.number;
      depositCreate.client_branch = detailDeposit.account?.branch;
      depositCreate.client_bank_name = detailDeposit.account?.bank;
      depositCreate.client_bank_number = detailDeposit.account?.bank_number;
      depositCreate.client_operation = detailDeposit.account?.operation;
      break;
  }
  try {
    yield call(apiPayment.post, `/partner/deposit/confirm`, depositCreate);
    depositCreate.amount = 0;
    const { data } = yield call(apiPayment.post, `/partner/deposit/finish`, {
      deposit: depositCreate,
    });
    yield put(ConfirmSuccess(data));
    history.push(`/deposit/info/${detailDeposit.type}/confirm`);
    // yield put(Loading(false));
  } catch (error) {
    console.log(error);
  } finally {
  }
}

export function* UploadFile(action: UploadFileDepositAction) {
  const { form, token }: { form: FormData; token: String } = action.payload;

  yield put(Loading(true));
  try {
    const { data } = yield call(
      apiPayment.post,
      `/partner/warehouse/receipts`,
      form,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    yield call(apiPayment.post, `/partner/depositbank/documentreceipt`, {
      protocol: token,
      document_receipt_link: data.id,
    });
    yield put(UploadSuccess(true));
    yield put(Loading(false));
  } catch (error) {
    console.log(error);
  } finally {
  }
}

export function* CheckAtarId(action: CheckAtarIDAction) {
  const { atarid } = action.payload;
  yield put(Loading(true));
  try {
    const { data } = yield call(
      apiPayment.get,
      `/partner/atar/account/check/${atarid}`
    );

    yield put(CheckAtarIdSuccess(data.exists));
    yield put(Loading(false));
  } catch (error) {
    console.log(error);
  } finally {
  }
}

export function* Cancel(action: CancelDepositAction) {
  const token = action.payload;
  yield put(Loading(true));
  try {
    const { data } = yield call(
      apiPayment.delete,
      `/partner/deposit/cancel/${token}`
    );
    yield put(Loading(false));
    console.log(data);
    history.push(`/deposit/info/cancel`);
  } catch (error) {
    console.log(error);
  } finally {
  }
}

export default all([
  takeLatest(DEPOSIT_CREATE, CreateDeposit),
  takeLatest(DEPOSIT_DETAIL, DetailDeposit),
  takeLatest(DEPOSIT_CONFIRM, ConfirmDeposit),
  takeEvery(DEPOSIT_CHECK, CheckDeposit),
  takeEvery(DEPOSIT_UPLOADFILE, UploadFile),
  takeEvery(DEPOSIT_CHECKATARID, CheckAtarId),
  takeEvery(DEPOSIT_CANCEL, Cancel),
]);
