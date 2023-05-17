import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'


export default function Navbar() {
    return (
            <ul className="nav_links">
            <Link to="/"><li>Accueil</li></Link>
            <Link to="/presentation"><li>Presentation</li></Link>
            <Link to="/prestation"><li>Prestation</li></Link>
            <Link to="/contact"><li>Contact</li></Link>
            </ul>
    );
}

