import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/auth.slice";
import reportCaseReducer from "./slices/reportCase.slice";
import summaryReducer from "./slices/summary.slice";

const rootReducer = combineReducers({
  auth: authReducer,
  reportCase: reportCaseReducer,
  summary: summaryReducer
});

export default rootReducer;
