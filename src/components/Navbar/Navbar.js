import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'


export default function Navbar() {
    return (
            <ul className="nav-links">
            <Link to="/"><li>Accueil</li></Link>
            <Link to="/"><li>Presentation</li></Link>
            <Link to="/"><li>Prestation</li></Link>
            <Link to="/"><li>Contact</li></Link>
            </ul>
    );
}

