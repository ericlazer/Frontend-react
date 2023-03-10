import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import snackBarReducer from "./snackBarReducer";
import coinInfoReducer from "./coinInfoReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  authState: authReducer,
  snackBarState: snackBarReducer,
  coinInfoState: coinInfoReducer,
});

export default configureStore(
  {
    reducer: rootReducer,
  },
  composeWithDevTools
);
