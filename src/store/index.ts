import { createStore, compose, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";

import createSagaMiddleware from "redux-saga";

import rootReducer from "./modules/rootReducer";
import rootSaga from "./modules/rootSaga";
import persistReducers from "./persistReducers";
import { middlewareToken } from "../config/protectedToken";

const development = process.env.NODE_ENV === "development";

const sagaMonitor = development ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddleware, middlewareToken];

const composer = development
  ? compose(applyMiddleware(...middlewares), console.tron.createEnhancer())
  : applyMiddleware(...middlewares);

const store = createStore(persistReducers(rootReducer), composer);
const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export { store, persistor };
