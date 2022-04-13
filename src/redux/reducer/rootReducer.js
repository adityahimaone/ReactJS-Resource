import { combineReducers } from "redux";
import postReducer from "./postReducer";
import postByIDReducer from "./postByIDReducer";

export default combineReducers({
  post: postReducer,
  postByID: postByIDReducer,
});
