import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'


export default function Footer() {
    return (
        <footer>
            <div>
                <ul className='footer__ul'>
                    <li className='footer__li'><i className="fa-solid fa-at"></i><Link
                        to="mailto:oht.education@icloud.com" className="a">oht.education@icloud.com</Link></li>
                    <li className='footer__li'><i className="fa-brands fa-facebook"></i><Link to="https://www.facebook.com/ohteducation" className="a">oht
                        education</Link></li>
                    <li className='footer__li'><i className="fa-brands fa-instagram"></i><Link
                        to="https://www.instagram.com/oht_education/?hl=fr" className="a">oht_education</Link></li>
                    <li className='footer__li'><i className="fa-brands fa-whatsapp"></i>07.88.92.38.52.</li>
                </ul>
            </div >
        </footer>
    )
}