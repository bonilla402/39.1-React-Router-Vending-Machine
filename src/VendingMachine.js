// src/VendingMachineApp.js
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CutePuppies from './CutePuppies';
import GrumpyCats from './GrumpyCats';
import SmellyFish from './SmellyFish';
import './VendingMachine.css';

function VendingMachineApp() {
    // Local function for rendering the Vending Machine options view
    function Options() {
        return (
            <div className="vending-machine">
                <div className="overlay">
                    <h1>Hello! I am a vending machine. What would you like to get?</h1>
                    <div className="options">
                        <Link to="/puppies" className="option">Cute Puppies</Link>
                        <Link to="/cats" className="option">Grumpy Cats</Link>
                        <Link to="/fish" className="option">Smelly Fish</Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Options />} /> {/* Home route uses Options */}
                <Route path="/puppies" element={<CutePuppies />} />
                <Route path="/cats" element={<GrumpyCats />} />
                <Route path="/fish" element={<SmellyFish />} />
            </Routes>
        </BrowserRouter>
    );
}

export default VendingMachineApp;
