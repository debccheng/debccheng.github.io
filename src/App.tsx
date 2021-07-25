import React from 'react';
import './App.css';
import SelfPortrait from './components/SelfPortrait/SelfPortrait';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <SelfPortrait />
      <div className="main-wrapper">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
