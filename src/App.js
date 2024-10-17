import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Main from './components/main';
import Manager from './components/managerMain';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/main" element={<Main/>} />
        <Route path="/manager" element={<Manager/>} />
      </Routes>
    </Router>

  );
}

export default App;
