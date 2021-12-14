import { all, takeLatest, fork } from "redux-saga/effects";

import home from "./home/sagas";

import general from "./general/sagas";
import deposit from "./deposit/sagas";
import user from "./user/sagas";
import sale from "./sale/sagas";

export default function* rootSaga() {
  yield all([home, general, deposit, user, sale]);
}
