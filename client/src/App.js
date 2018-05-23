import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser } from './actions/authActions';

import { Provider } from 'react-redux';
import store from './store';


import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';

import './App.css';

// Check for token
if(localStorage.jwtToken){
  //Set Auth token header auth
  setAuthToken(localStorage.jwt_token);
  //; Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwt_token);
  // set admin and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
}

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Router>
          <div className="App Site">
            <Navbar />
                <Route exact path="/" component={Landing} />
                <div className="Site-content">
                  <Route exact path="/login" component={ Login } />
                </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
