import React, {useState} from 'react';
import './App.css';
import FavoriteComponent from './components/FavoriteData';
import Dashboard from './components/Dashboard';
import Signup from './components/Signup';
import Login from './components/Login'
import {Route} from 'react-router-dom'


function App() {
  const [user, setUser] = useState([]);
  const [currentUser, setCurrentUser] = useState("");

  return (
    <div className="App">
    <Route path='/signup'><Signup user={user} setUser={setUser} setCurrentUser={setCurrentUser}/></Route>
    <Route exact path='/'><Login user={user}/></Route>
    
    <Route path='/dashboard'><Dashboard/></Route>
    </div>
  );
}

export default App;
