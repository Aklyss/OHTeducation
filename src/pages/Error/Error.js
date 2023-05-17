import React from 'react';
import './Error.css';
import Dog from '../../images/logo/bDog.png'

export default function Error404() {
    return (
        <div className="error-404">
            <div className="container">
                <h1>404</h1>
                <img className='bDog' src={Dog} alt='image de chien' />
                <p>Oops! La page que vous cherchez est introuvable...</p>
                <button onClick={() => window.history.back()}>Retourner en arrière</button>
            </div>
        </div>
    );
}