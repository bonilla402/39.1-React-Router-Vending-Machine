import React from 'react';
import { Link } from 'react-router-dom';
import './GrumpyCats.css';

function GrumpyCats() {
    return (
        <div className="grumpy-cats">
            <h1>Grumpy Cats</h1>
            <p>These cats aren't amused, no matter what you do.</p>
            <Link to="/" className="grumpy-cats-back-link">
                Back to Vending Machine
            </Link>
        </div>
    );
}

export default GrumpyCats;
