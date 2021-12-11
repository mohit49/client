import isloggedinUser  from './loginState';
import { combineReducers } from "redux";

const allReducers = combineReducers({
  islogged :isloggedinUser
});

export default allReducers;