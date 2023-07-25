import React from 'react';
import "./Header.css";
import Logo from "../../images/logo/LogoNin.jpg";
import Burger from '../Burger/Burger'
import Navbar from '../Navbar/Navbar'

const Header = () => {
    return (
        <header>
            <div className='header'>
            <div className="header__box">
                <img className="header__logo" src={Logo} alt="Logo de OHT éducation" />
                <h1 className='title'>OHT EDUCATION</h1>
            </div>
            <nav>
                <Navbar />
                <Burger />
            </nav>
            </div>
        </header>
    );
}

export default Header;