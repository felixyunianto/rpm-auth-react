import { combineReducers } from "redux";
import authReducer from "./auth";

const indexReducers = combineReducers({
    auth: authReducer
})

export default indexReducers;