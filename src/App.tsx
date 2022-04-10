import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Units from './components/Units';
import Random from './components/Random';

interface Props {}

const App = ({  }: Props) => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/units" element={<Units />} />
            <Route path="/random" element={<Random />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;