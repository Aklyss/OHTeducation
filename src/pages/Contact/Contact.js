import React, { useState } from 'react'
import "./Contact.css"
import fDog from '../../images/logo/fDog.png'
import emailjs from 'emailjs-com';
import { emailRegex, phoneRegex, nameRegex } from '../../components/Regex/Regex';

const MyForm = () => {
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidPhone, setIsValidPhone] = useState(true);
    const [isValidLastName, setIsValidLastName] = useState(true);
    const [isValidFirstName, setIsValidFirstName] = useState(true);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'lastName') {
            setLastName(value);
            setIsValidLastName(nameRegex.test(value));
        } else if (name === 'firstName') {
            setFirstName(value);
            setIsValidFirstName(nameRegex.test(value));
        } else if (name === 'email') {
            setEmail(value);
            setIsValidEmail(emailRegex.test(value));
        } else if (name === 'phone') {
            setPhone(value);
            setIsValidPhone(phoneRegex.test(value));
        } else if (name === 'message') {
            setMessage(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Vérification de tous les champs
        if (
            isValidLastName &&
            isValidFirstName &&
            emailRegex.test(email) &&
            phoneRegex.test(phone) &&
            message.trim() !== ''
        ) {
            // Tous les champs sont valides, envoyer le formulaire
            setIsValidEmail(true); // Réinitialiser l'état de la validation de l'e-mail
            emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            alert('Le mail a bien été envoyé');
        } else {
            // Afficher les messages d'erreur pour les champs invalides ou vides
            setIsValidLastName(nameRegex.test(lastName));
            setIsValidFirstName(nameRegex.test(firstName));
            setIsValidEmail(emailRegex.test(email));
            setIsValidPhone(phoneRegex.test(phone));
            setMessage(message.trim() !== '');
            alert('Veuillez vérifier que tous les champs sont bien remplis');
        }
    };

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
                    <form method="post" className="form__r" onSubmit={handleSubmit}>
                            <div className='name'>
                                <div className='lab'>
                                    <label htmlFor="lastName">Nom:</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={lastName}
                                        onChange={handleInputChange}
                                        className="champs"
                                        placeholder='Exemple: Dupont'
                                    />
                                    {!isValidLastName && (
                                        <p className='errorForm'>Veuillez saisir un nom valide.</p>
                                    )}
                                </div>
                                <div className='lab'>
                                    <label htmlFor="firstName">Prénom:</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={firstName}
                                        onChange={handleInputChange}
                                        className="champs"
                                        placeholder='Exemple: Jean'
                                    />
                                    {!isValidFirstName && (
                                        <p className='errorForm'>Veuillez saisir un prénom valide.</p>
                                    )}
                                </div>
                            </div>
                        <div className='lab'>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={handleInputChange}
                                className="champs"
                                placeholder='Exemple: JeanDupont@gmail.fr'
                            />
                            {!isValidEmail && (
                                <p className='errorForm'>Veuillez saisir une adresse e-mail valide.</p>
                            )}
                        </div>
                        <div className='lab'>
                            <label htmlFor="phone">Téléphone:</label>
                            <input 
                                type="tel"
                                id="phone"
                                name="phone"
                                value={phone}
                                onChange={handleInputChange}
                                className="champs"
                                placeholder='Exemple: 0601020304'
                            />
                            {!isValidPhone && (
                                <p className='errorForm'>Veuillez saisir un numéro de téléphone valide.</p>
                            )}
                        </div>
                        <div className='lab'>
                            <label htmlFor="message">Demande:</label>
                            <textarea 
                                id="message"
                                name="message"
                                value={message}
                                onChange={handleInputChange}
                                className="champs demande"
                                placeholder='Exemple: Bonjour, je vous contact au sujet de ...'
                            >
                                {message === '' && (
                                    <p className='errorForm'>Veuillez saisir votre demande.</p>
                                )}
                            </textarea>
                            <input 
                            type="submit" 
                            value="Envoyer" 
                            className="bouton" 
                            />
                            </div>
                    </form>
                </section>
            </div>
        </main>
    )
};
export default MyForm;