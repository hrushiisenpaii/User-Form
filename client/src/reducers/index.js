import { combineReducers } from "redux";
import authReducer from "./auth";
import usersReducer from "./users";
import currentUserReducer from "./currentUser";

export default combineReducers({
    authReducer, usersReducer, currentUserReducer
})