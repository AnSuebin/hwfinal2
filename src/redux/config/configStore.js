import { createStore } from "redux";
import { combineReducers } from "redux";
import workList from "../modules/workList";

// 스토어에서 리듀서 workList 내용 받아오기
const rootReducer = combineReducers({
  workList,
});
const store = createStore(rootReducer);

export default store;
