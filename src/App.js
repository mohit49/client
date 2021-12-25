
import React ,{useEffect} from "react";
import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navigation from "./ui-elements/header/Navigation";
import HomePage from "./pages/home";
import Footer from "./ui-elements/footer/footer";
import Login from "./pages/login";
import Register from "./pages/register";
import MyAccount from "./pages/my-account";
import Messages from "./pages/messages";
function App() {




  
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
