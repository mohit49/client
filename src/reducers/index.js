import isloggedinUser  from './loginState';
import isloggedinUserDet from './userDet'
import onlineUsers from './onlineUsers';
import userPic from './userPic';
import chatinPerson from './chattingperson';
import { combineReducers } from "redux";

const allReducers = combineReducers({
  islogged :isloggedinUser,
  onlineUsers: onlineUsers,
  userPic: userPic,
  isloggedinUserDet: isloggedinUserDet,
  chatinPerson : chatinPerson

});

export default allReducers;