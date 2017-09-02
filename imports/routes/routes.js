import {Router,Route,Switch} from 'react-router-dom';
import React from 'react';
import Signup from './../ui/components/Signup';
import NotFound from './../ui/components/NotFound';
import Login from './../ui/components/Login';
import DashBoard from './../ui/components/DashBoard';
import changePassword from './../ui/components/changePassword';
import forgotPassword from './../ui/components/forgotPassword';
import resetPassword from './../ui/components/resetPassword';
import createBrowserHistory from 'history/createBrowserHistory';
export const History=createBrowserHistory();

const unAuthenticatedPages=['/','/signup'];  //pages person cannot visit if he is authenticated
const AuthenticatedPages=['/dashboard','/changepassword'];    //pages person can visit if he is authenticated

export const onAuthChange=(isAuthenticated)=>{
  const pathname=History.location.pathname;
  const isunAuthenticatedPage=unAuthenticatedPages.includes(pathname);
  const isAuthenticatedPage=AuthenticatedPages.includes(pathname);
  if (isAuthenticated && isunAuthenticatedPage) {
    History.replace('/dashboard');
  }
  else if (!isAuthenticated && isAuthenticatedPage ) {
    History.replace('/');
  }
};
export const routes=(
  <Router history={History}>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/dashboard" component={DashBoard}/>
      <Route path="/changepassword" component={changePassword}/>
      <Route path="/forgotpassword" component={forgotPassword}/>
      <Route path="/resetpassword" component={resetPassword}/>
      <Route path="*" component={NotFound}/>
    </Switch>
  </Router>
);
