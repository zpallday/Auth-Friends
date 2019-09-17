import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';
import Login from './components/Login';
function App() {
  return (
    <div className="App">
     <Route path='/' component={Login}/>
     <PrivateRoute exact path='/friendslist' component={FriendsList}/>
    </div>
  );
}

export default App;
