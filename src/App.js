
import React ,{useEffect} from "react";
import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navigation from "./ui-elements/header/Navigation";
import HomePage from "./pages/home";
import Footer from "./ui-elements/footer/footer";
import Login from "./pages/login";
import Register from "./pages/register";
import MyAccount from "./pages/my-account";
import {useDispatch, useSelector} from "react-redux";
import { islogin, userdet } from "./actions";
function App() {
const dispatch = useDispatch();
// use Effect used here only to run one time with blank dependency to initial login status and storage if exist in session storage
useEffect(() => {
  const loginCheck = sessionStorage.getItem("loginStatus")
  const loginDet = sessionStorage.getItem("loginUser")
    if(loginCheck){
      dispatch(islogin());
      dispatch(userdet(loginDet));
    }
  }, [])
  
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
      </Router>
     
  
     <Footer></Footer>

    </div>
  );
}

export default App;
