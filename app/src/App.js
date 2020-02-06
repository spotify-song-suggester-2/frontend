import React, {useState} from 'react';
import './App.css';
import {useHistory} from "react-router-dom";
import FavoriteComponent from './components/FavoriteData';
import Dashboard from './components/Dashboard';
import Signup from './components/Signup';
import Login from './components/Login'
import {Route} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import Nav from './components/Nav'
import styled from 'styled-components'


function App() {
  const [user, setUser] = useState([]);
  const [currentUser, setCurrentUser] = useState("");
  const history = useHistory();

  return (
    <div className="App">
    <Nav/>
    <H1>Symphinity</H1>
    <Route path='/signup'><Signup user={user} setUser={setUser} setCurrentUser={setCurrentUser} history={history}/></Route>
    <Route exact path='/'><Login user={user} history={history}/></Route>
    <PrivateRoute path="/dashboard" component={Dashboard} />
    {/* <Route path='/dashboard'><Dashboard/></Route> */}
    </div>
  );
}

const H1 = styled.h1`
    font-family: 'Kaushan Script', cursive;
    color: rgba(239, 1, 159, 1);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export default App;
