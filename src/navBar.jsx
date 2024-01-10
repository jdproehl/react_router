import {Routes, Route, Link } from 'react-router-dom'
import './App.css'

export default function NavBar() {
    return (
     <div id="container">
        <h1>Hello React Router!</h1>
        <div id="navbar">
          <Link to="/">Home</Link>
          <Link to="/red">Red</Link>
          <Link to="/blue">Blue</Link>
          <Link to="/green">Green</Link>
          <Link to="/purple">Purple</Link>
        </div>
    </div>
    );
  }