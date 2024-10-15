import React from 'react';
import { Link } from 'react-router-dom';
import './SmellyFish.css';

function SmellyFish() {
    return (
        <div className="smelly-fish">
            <h1>Smelly Fish</h1>
            <p>A little stinky, but still lovable!</p>
            <Link to="/" className="smelly-fish-back-link">
                Back to Vending Machine
            </Link>
        </div>
    );
}

export default SmellyFish;
