import { combineReducers } from "redux";
import { counterReducer } from "./couterReducer";
import { timestampReducer } from "./timestampReducer";

export default combineReducers({
    timestamp: timestampReducer,
    counter: counterReducer
}
)