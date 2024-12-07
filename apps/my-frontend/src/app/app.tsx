// import NxWelcome from './nx-welcome';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from "../components/navigation";
import Home from '../pages/home';
import About from '../pages/about';
import Other from '../pages/other';

const App: React.FC = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/other" element={<Other />} />
      </Routes>
    </>
  );
}

export default App;