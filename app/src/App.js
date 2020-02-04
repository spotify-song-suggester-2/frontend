import React from 'react';
import './App.css';
import FavoriteComponent from './components/FavoriteData';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <div className="App">
    <Dashboard/>
    <FavoriteComponent/>
    </div>
  );
}

export default App;
