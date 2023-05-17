import React, { useState } from "react";
import './Burger.css'
import { Link } from "react-router-dom"

const Burger = () => {

    // to change burger classes
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return (
        <div className="burger">
            <div>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
            </div>

            <div className={menu_class}>
                <ul className="ham__link">
                    <Link to="/" onClick={updateMenu} className="link"><li>Accueil</li></Link>
                    <Link to="/presentation" onClick={updateMenu} className="link"><li>Presentation</li></Link>
                    <Link to="/prestation" onClick={updateMenu} className="link"><li>Prestation</li></Link>
                    <Link to="/contact" onClick={updateMenu} className="link"><li>Contact</li></Link >
                </ul>
            </div>
        </div>
    )
}

export default Burger