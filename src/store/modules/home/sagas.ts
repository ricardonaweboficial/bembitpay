import { all, takeLatest, put, call } from "redux-saga/effects";

  

export function* initial(action: any) {


}

export default all([takeLatest("@home/INITIAL", initial)]);
