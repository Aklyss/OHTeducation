import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'


export default function Footer() {
    return (
        <footer>
            <div>
                <ul className='footer__ul'>
                    <Link
                        to="mailto:oht.education@icloud.com" className="a"><li className='footer__li'><i className="fa-solid fa-at"></i>OHT.education@icloud.com</li></Link>
                    <Link
                        to="https://www.facebook.com/ohteducation" className="a"><li className='footer__li'><i className="fa-brands fa-facebook"></i>OHTeducation</li></Link>
                    <Link
                        to="https://www.instagram.com/oht_education/?hl=fr" className="a"><li className='footer__li'><i className="fa-brands fa-instagram"></i>OHT_education</li></Link>
                    <li className='footer__li'><i className="fa-brands fa-whatsapp"></i>07.88.92.38.52.</li>
                </ul>
            </div >
        </footer>
    )
}