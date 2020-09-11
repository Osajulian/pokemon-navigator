import React from 'react';
import './App.css';
import Navigator from './components/Navigator';

function App() {
  return (
    <div className="App">
    <h3 style={{wrap: 'nowrap'}}>Pokemon Navigator</h3>
      <Navigator />
    </div>
  );
}

export default App;