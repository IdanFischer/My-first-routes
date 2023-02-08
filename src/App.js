import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './scenes/Welcome';
import Home from './scenes/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route exact path="/" element={<Welcome />} />
          <Route path="*" element={<Welcome />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
