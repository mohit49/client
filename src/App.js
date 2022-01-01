
import React ,{useEffect, useState} from "react";
import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { io } from "socket.io-client";
import Navigation from "./ui-elements/header/Navigation";
import HomePage from "./pages/home";
import Footer from "./ui-elements/footer/footer";
import Login from "./pages/login";
import Register from "./pages/register";
import MyAccount from "./pages/my-account";
import Messages from "./pages/messages";
import { useSelector } from "react-redux";
function App() {
  const socket = io.connect("//localhost:3001", {transports: ['websocket']});
  const userInformation = useSelector(state => state.isloggedinUserDet);
  const userPic = useSelector(state => state.userPic);
  const loginCheck = useSelector(state => state.islogged);

  useEffect(()=>{
    if(userInformation && userPic) {
      const dataArr = JSON.parse(userInformation);
      dataArr[0].pic = userPic
      socket?.emit('userJoin',  dataArr )
    }
    return () => {
      socket.disconnect();
    }
  },[socket, userPic, userInformation ,loginCheck]);
 
return (
    <div className="App">
 <Router>
      <Navigation/>
        <Switch>
          <Route exact path='/login' component={Login}>
          <Login/>
          </Route>
        </Switch>
        <Switch>
          <Route exact path='/' component={HomePage}>
          <HomePage/>
          </Route>
        </Switch>
        <Switch>
          <Route exact path='/register' component={Register}>
          <Register/>
          </Route>
        </Switch>
        <Switch>
          <Route exact path='/my-account' component={MyAccount}>
          <MyAccount/>
          </Route>
        </Switch>
        <Switch>
          <Route exact path='/messages' component={Messages}>
          <Messages/>
          </Route>
        </Switch>
      </Router>
     
  
     <Footer></Footer>

    </div>
  );
}

export default App;
