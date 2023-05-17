import React, { useState } from 'react';
import './Prestation.css';
import fontTarif from '../../images/source/fontTarif.jpeg'
import { Link } from 'react-router-dom'

const prestationsData = [
    {
        id: 1,
        title: 'Bilan Comportemental',
        description: '1 Heure de Séance',
        details: 'Le bilan comportemental est une première visite où nous allons chercher à identifier le problème du chien grâce à nos échanges et aux informations fournies mais aussi grâce à ses réactions. Nous identifierons ensuite le déclencheur du problème puis enfin nous vous proposerons une piste de travail ainsi que les exercices adéquats à pratiquer.',
        tarif: 'Gratuit',
    },
    {
        id: 2,
        title: 'Forfait de 5 Séances individuelles',
        description: '1 Heure de Séance',
        details: `Je vous propose deux forfaits différents, celui de 5 séances et celui de 10 séances. Les séances durent de 1h à 1h30 environ et sont faites pour travailler ensemble. Je vous montrerai des exercices et le travaille avec vous pour que vous puissiez le continuer chez vous. Il faut aussi savoir qu'il vous faudra du temps pour apprendre, ainsi que pour le chien. Les séances ne seront donc pas tous les jours. Une fois la séance effectuée, vous allez donc devoir continuer chez vous. Je reste toutefois à disposition pour toute question ou renseignement. Ce sera également à vous de disposer les séances en fonction de l’avancée du travail, on peut éventuellement faire une séance par semaine ou toutes les deux semaines par exemple, c'est à votre convenance. Bien-sûr, vous pouvez prendre rendez vous au fur et à mesure, chaque chien possède son dossier pour être suivi à 100%.`,
        tarif: '250€',
    },
    {
        id: 3,
        title: 'Forfait de 10 Séances individuelles',
        description: '1 Heure de Séance',
        details: `Je vous propose deux forfaits différents, celui de 5 séances et celui de 10 séances. Les séances durent de 1h à 1h30 environ et sont faites pour travailler ensemble. Je vous montrerai des exercices et le travaille avec vous pour que vous puissiez le continuer chez vous. Il faut aussi savoir qu'il vous faudra du temps pour apprendre, ainsi que pour le chien. Les séances ne seront donc pas tous les jours. Une fois la séance effectuée, vous allez donc devoir continuer chez vous. Je reste toutefois à disposition pour toute question ou renseignement. Ce sera également à vous de disposer les séances en fonction de l’avancée du travail, on peut éventuellement faire une séance par semaine ou toutes les deux semaines par exemple, c'est à votre convenance. Bien-sûr, vous pouvez prendre rendez vous au fur et à mesure, chaque chien possède son dossier pour être suivi à 100%.`,
        tarif: '450€',
    },
    {
        id: 4,
        title: 'Balade Collective',
        description: '1 Heure et 30 Minutes de Séance',
        details: `Les balades collectives de chiens ou de chiots sont là pour que votre chien passe un bon moment tout en se sociabilisant, mais également pour répondre à des questions de travail. C'est un moment où vous pourrez échanger sur la manière dont se comportent vos loulous. Ces balades se passent principalement au lac, dans les bois, ou encore à la plage.`,
        tarif: '10€',
    },
];

function Prestation() {
    const [selectedPrestation, setSelectedPrestation] = useState(null);

    function handlePrestationClick(prestation) {
        setSelectedPrestation(prestation);
    }

    function handleDetailsClose() {
        setSelectedPrestation(null);
    }

    return (
        <main className='containerAll'>
        <div className="prestation-container">
            <div className="prestation-cards">
                {prestationsData.map((prestation) => (
                    <div
                        className="prestation-card"
                        key={prestation.id}
                        onClick={() => handlePrestationClick(prestation)}
                    >
                        <h2>{prestation.title}</h2>
                        <p>{prestation.description}</p>
                        <p>Prix: {prestation.tarif}</p>
                        <button>Voir plus</button>
                    </div>
                ))}
                <Link to="/contact" className='lienContact'>Me Contacter</Link>
            </div>
            {selectedPrestation && (
                <div className="prestation-details">
                    <button className="close-button" onClick={handleDetailsClose}>
                        X
                    </button>
                    <h2>{selectedPrestation.title}</h2>
                    <p className="prestation-content">{selectedPrestation.details}</p>
                </div>
            )}
        </div>
    </main>
    );
}

export default Prestation;