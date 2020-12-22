import React from 'react';

import './App.css';
import { useState, useEffect } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import { endSession, checkSession } from './services';
import Login from './Login';
import Home from './Home';
import AddNewDeal from './AddNewDeal';
import DealDetails from './DealDetails';
import MyAccount from './MyAccount';

function App() {
  const [userState, setUserState] = useState({ isLoggedIn: false, isPending: true });
  const userImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz3VL6dIejtydIjARhITdoJFO2IdzY_gUepQ&usqp=CAU";

  useEffect( () => {
    checkSession()
    .then( userinfo => {
      setUserState({
        isLoggedIn: true,
        isPending: false,
        username: userinfo
      });
    })
    .catch( () => {
      setUserState({
        isLoggedIn: false,
        isPending: false,
      });
    });
  }, []); 


  const login = function({ username }) {
    setUserState({
      isLoggedIn: true,
      isPending: false,
      username: username
    });
  };


  const logout = function() {
    setUserState({
      ...userState,
      isPending: true,
    });
    endSession()
    .then( () => {
      setUserState({
        isLoggedIn: false,
        isPending: false,
      });
    })
    .catch( () => {
      setUserState({
        ...userState,
        isPending: false,
      });
    });
  };


  if(userState.isPending) {
    return (
      <div className="app">
        Loading...
      </div>
    );
  }


  let navContent;

  if(userState.isLoggedIn) {
    navContent = (
        <nav>
          <div className="user-information"> 
            <img className="user-image" src={userImage} alt="user avatar"/>
            <h2 className="user-greeting"> Hello {userState.username} </h2>
          </div>
          <ul className="navigation-post-login">
            <li key={1}><Link to="/" className="link"> HOME </Link></li>
            <li key={2}><Link to="/addItem" className="link"> ADD PRODUCT </Link></li>
            <li key={3}><Link to="/myAccount" className="link"> MY ACCOUNT</Link></li>
            <li key={4}><Link to="/" className="link" onClick={logout}>LOGOUT</Link></li>
          </ul>
        </nav>)
  } else {
    navContent = (
      <nav>
        <ul className="navigation-pre-login">
          <li key={1}><Link to="/" className="link"> HOME </Link></li>
          <li key={2}><Link to="/login" className="link"> LOGIN </Link></li>
        </ul>
      </nav>)
  };


  let content = (
      <div>
      {navContent}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" render={() => <Login onLogin={login}/>} />
        <Route exact path="/addItem" render={() => <AddNewDeal username={userState.username} />} />
        <Route exact path="/myAccount" render={() => <MyAccount username={userState.username} />} />
        <Route exact path='/viewDetails/:id' component={DealDetails} />
        <Route exact path=':link' />
      </Switch>
      </div> );


  return (
    <div className="app">
      <h1 className="website-title"> PINK FRIDAY </h1>
      {content}
    </div> );
}

export default App;

