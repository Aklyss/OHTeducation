import React from 'react'
import "./Header.css"
import Logo from "../../images/logo/LogoNin.jpg"
import Navbar from '../Navbar/Navbar'

export default function Header() {
    return (
        <header>
                <div className="header__box">
                    <img className="header__logo" src={Logo} alt="Logo de OHT éducation"/>
                        <h1 className='title'>OHT EDUCATION</h1>
                </div>
                <Navbar/>
        </header>
    )
}