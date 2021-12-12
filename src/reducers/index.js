import isloggedinUser  from './loginState';
import isloggedinUserDet from './userDet'
import { combineReducers } from "redux";

const allReducers = combineReducers({
  islogged :isloggedinUser,
  isloggedinUserDet: isloggedinUserDet
});

export default allReducers;