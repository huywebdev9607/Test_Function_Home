import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice";


const rootReducer = combineReducers({
    authReducer
})

export default rootReducer