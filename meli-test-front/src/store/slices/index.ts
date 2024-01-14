import { combineReducers } from "redux";
import item from "./items";

const rootReducer = combineReducers({
	itemStore: item,
});

export default rootReducer;
