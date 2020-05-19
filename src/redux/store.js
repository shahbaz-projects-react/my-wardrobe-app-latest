import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const INITIAL_STATE = {};
const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(
  rootReducer,
  INITIAL_STATE,
  applyMiddleware(...middlewares)
);

export const persistor = persistStore(store);

export default { store, persistStore };
