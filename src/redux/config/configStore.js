import { createStore } from "redux";
import { combineReducers } from "redux";
import workList from "../modules/workList";

const rootReducer = combineReducers({
  workList: workList,
});
const store = createStore(rootReducer);

export default store;
