import { createStore, applyMiddleware } from "redux";

import logger from "redux-logger";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const persistedState = sessionStorage.getItem("reduxState")
  ? JSON.parse(sessionStorage.getItem("reduxState"))
  : {};

const Store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(logger))
);
Store.subscribe(() => {
  sessionStorage.setItem("reduxState", JSON.stringify(Store.getState()));
});

export default Store;
