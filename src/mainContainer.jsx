import {Routes, Route, Link } from 'react-router-dom'
import Blue from './components/Blue'
import Red from './components/Red'
import Green from './components/Green'
import Home from './components/Home'
import Purple from './components/Purple'
import './App.css'

export default function MainContainer() {
    return (
        <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
          <Route path="/green" element={<Green />} />
          <Route path="/purple" element={<Purple />} />
        </Routes>
      </div>
    );
  }