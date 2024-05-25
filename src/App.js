import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Servicios from './pages/Servicios';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servicios" element={<Servicios />} />
    </Routes>
  );
}

export default App;
