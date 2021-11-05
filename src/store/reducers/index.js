import { combineReducers } from "redux";

import { loginReducer } from "./login";
import { dashboardReducer } from "./dashboard";

const rootReducer = combineReducers({ loginReducer, dashboardReducer });

export default rootReducer;
