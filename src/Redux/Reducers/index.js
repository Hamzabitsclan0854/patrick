import { combineReducers } from "redux";
import HurrayReducer from "./HurrayReducer";
import ResultReducer from "./ResultReducer";
import UserReducer from "./UserReduser";


export const rootReducer = combineReducers({
    UserReducer:UserReducer,
    ResultReducer:ResultReducer,
    HurrayReducer:HurrayReducer
});