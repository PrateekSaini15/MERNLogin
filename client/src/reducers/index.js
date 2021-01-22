import { combineReducers, combinereducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
});
