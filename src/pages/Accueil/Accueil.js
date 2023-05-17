import React from 'react';
import './Accueil.css';

const Accueil = () => {
    return (
        <div className="homepage">
            <section className="hero-section">
                <div className="hero-content">
                    <h2>Bienvenue chez OHT Education</h2>
                    <p>Améliorez la relation avec votre chien grâce à nos services d'éducations canins professionnels.</p>
                    <a href="#contact" className="cta-button">Prendre rendez-vous</a>
                </div>
            </section>

            <section id="services" className="services-section">
                <h2>Nos Services</h2>
                <div className="service-cards">
                    <div className="service-card">
                        <h3>Presentation</h3>
                        <p>Enseignez à votre chien les commandes de base telles que "assis", "couché", "viens" et bien plus encore.</p>
                    </div>
                    <div className="service-card">
                        <h3>Prestation</h3>
                        <p>Aidez votre chien à s'adapter et à interagir avec d'autres chiens et personnes de manière positive.</p>
                    </div>
                    <div className="service-card">
                        <h3>Contact</h3>
                        <p>Résolvez les problèmes de comportement tels que l'agressivité, l'anxiété, les aboiements excessifs, etc.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Accueil;