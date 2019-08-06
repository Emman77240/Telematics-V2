import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { setCurrentUser } from './actions/authentication';
import Header from './components/header';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import Dashboard from './pages/dashboard';
import Chart from './pages/chart';

if(localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));
}

function App() {
  return (
    <Provider store = { store }>
      <Router>
        <div className="app">
          <Header />
          <Route exact path="/" component={ SignIn } />
          <Route exact path="/signup" component={ SignUp } />
          <Route exact path="/dashboard" component={ Dashboard } /> 
          <Route exact path="/chart" component={ Chart } />  
        </div>
      </Router>
    </Provider>
  );
}

export default App;