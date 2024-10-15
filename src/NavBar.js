// src/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return (
        <nav className="navbar">
            <Link to="/">Vending Machine</Link>
            <Link to="/puppies">Cute Puppies</Link>
            <Link to="/cats">Grumpy Cats</Link>
            <Link to="/fish">Smelly Fish</Link>
        </nav>
    );
}

export default NavBar;
