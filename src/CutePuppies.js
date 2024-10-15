// src/CutePuppies.js
import React from 'react';
import { Link } from 'react-router-dom';
import './CutePuppies.css';

function CutePuppies() {
    return (
        <div className="cute-puppies">
            <h1>Cute Puppies</h1>
            <p>Adorable puppies full of love!</p>
            <Link to="/" className="cute-puppies-back-link">
                Back to Vending Machine
            </Link>
        </div>
    );
}

export default CutePuppies;
