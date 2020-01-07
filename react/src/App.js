import React from 'react';
import logo from './BAI_LOGO.png';
import annotatedText from './data/annotatedSentences.txt';

import './App.css';

console.log('>> annotatedText', annotatedText);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
