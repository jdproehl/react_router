import {Routes, Route, Link } from 'react-router-dom'
import './App.css'

export default function Footer() {
    return (
        <div id="footer">
          <Link to="/">Home</Link>
          <Link to="/red">Red</Link>
          <Link to="/blue">Blue</Link>
          <Link to="/green">Green</Link>
          <Link to="/purple">Purple</Link>
        </div>
    );
  }