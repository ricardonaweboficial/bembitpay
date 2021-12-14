import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { Action, Reducer } from "redux";

export default (reducers:any)  => {
  const persistedReducers = persistReducer(
    {
      key: "stratumx-pay",
      storage,
      whitelist: ["user"]
    },
    reducers
  );
  return persistedReducers;
};
