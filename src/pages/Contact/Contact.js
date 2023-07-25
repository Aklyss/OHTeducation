import React from 'react'
import "./Contact.css"
import fDog from '../../images/logo/fDog.png'
import emailjs from 'emailjs-com';


export default function Contact() {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <main data-barba="container" data-barba-namespace="tarif">
            <div className='header_titre'>
                <h1>Contact</h1>
            </div>
            <div className="form__back">
                <section className="form__front">
                    <div className="form__l">
                        <div>
                            <h1> Info contact :</h1>
                            <div>
                                <h2 className="contact__sousTitre">Nom</h2>
                                <p className="contact__par">Ninon Darques</p>
                            </div>
                            <div><h2 className="contact__sousTitre">Email</h2>
                                <p className="contact__par">Oht.Education@Icloud.com</p></div>
                            <div><h2 className="contact__sousTitre">Whatsapp</h2>
                                <p className="contact__par">07.88.92.38.52.</p></div>
                        </div>
                        <img className='fDog' src={fDog} alt='chien regardant vers la droite'/>
                    </div>
                    <form method="post" className="form__r" onSubmit={sendEmail}>
                        <div className="name">
                            <div className='lab'>
                                <label htmlFor="lastName">Nom:*</label>
                                <input type="text" id="lastName" name="lastName" className="champs" placeholder='Exemple: Dupont'/>
                            </div>
                            <div className='lab'>
                                <label htmlFor="firstName">Prénom:*</label>
                                <input type="text" id="firstName" name="firstName" className="champs" placeholder='Exemple: Jean' />
                            </div>
                        </div>
                        <div className='lab'>
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" className="champs" placeholder='Exemple: JeanDupont@gmail.fr' />
                        </div>
                        <div className='lab'>
                            <label htmlFor="phone">Téléphone:*</label>
                            <input type="tel" id="phone" name="phone" className="champs" placeholder='xx.xx.xx.xx.xx' />
                        </div>
                        <div className='lab'>
                            <label htmlFor="message">Demande:*</label>
                            <textarea id="message" name="message" className="champs demande" placeholder='Bonjour, je vous contact au sujet de ...'></textarea>
                        </div>
                        <p>*Champs obligatoires</p>
                        <div><input type="submit" value="Envoyer" className="bouton" /></div>
                    </form>
                </section>
            </div>
        </main>
    )
}