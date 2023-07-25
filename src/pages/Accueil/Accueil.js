import React from 'react';
import { Link } from 'react-router-dom';
import './Accueil.css';

const Accueil = () => {
    return (
        <main className="accueil">
            <section className='accueil_banniere'>
                <div className='banniere_chien'>
                    <h1 className="Citation1 typing_animation">« Tout le monde pense qu’ils ont le meilleur chien et ils ont tous raison. » – W.R. Purche</h1>
                </div>
            </section>
            <section className="accueil_presentation">
                <div>
                <div className="accueil_titre">
                    <h2>Bienvenue chez OHT Education</h2>
                    <p>Améliorez la relation avec votre chien grâce à nos services d'éducations canins professionnels.</p>
                        <Link to="/contact" className="cta-button"><li>Prendre rendez-vous</li></Link>
                </div>
                </div>

            <div className="accueil_section">
                <h2>Nos Services</h2>
                <div className="accueil_cards">
                    <div className="accueil_card">
                        <h3>Presentation</h3>
                        <p>Enseignez à votre chien les commandes de base telles que "assis", "couché", "viens" et bien plus encore.</p>
                    </div>
                    <div className="accueil_card">
                        <h3>Prestation</h3>
                        <p>Aidez votre chien à s'adapter et à interagir avec d'autres chiens et personnes de manière positive.</p>
                    </div>
                    <div className="accueil_card">
                        <h3>Contact</h3>
                        <p>Résolvez les problèmes de comportement tels que l'agressivité, l'anxiété, les aboiements excessifs, etc.</p>
                    </div>
                </div>
            </div>
            </section>
        </main>
    )
}

export default Accueil;