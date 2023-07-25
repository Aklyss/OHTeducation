import React, { useState } from 'react';
import './Presentation.css';
import Tessa1 from '../../images/source/Tessa/Tessa1.jpg';
import Tessa2 from '../../images/source/Tessa/Tessa2.jpg';
import Tessa3 from '../../images/source/Tessa/Tessa3.jpg';
import Tessa4 from '../../images/source/Tessa/Tessa4.jpg';
import Ninon from '../../images/source/Tessa/Ninon.jpg';

const images = [
    {
        src: Tessa1,
        alt: 'Tessa 1',
    },
    {
        src: Tessa2,
        alt: 'Tessa 2',
    },
    {
        src: Tessa3,
        alt: 'Tessa 3',
    },
    {
        src: Tessa4,
        alt: 'Tessa 4',
    },
];

export default function Presentation() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        const index = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(index);
    };

    const handleNext = () => {
        const index = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(index);
    };

    return (
        <main>
            <div className='header_titre'>
                <h1>Présentation</h1>
            </div>
        <div className="presentation-container" data-barba="container" data-barba-namespace="tarif">
            <div className="presentation">
                <div className='profilNinon'>
                <img className='imgNinon' src={Ninon} alt='Ninon Darques éducatrice canin'/>
                <div className="maitre-description">
                    <h2>Ninon Darques</h2>
                    <p>
                        Passionnée par les animaux depuis ma tendre enfance et d'un naturel altruiste, j'ai décidé d'en faire mon
                        métier. Je suis diplômée de l'ACACED (Attestation de Connaissances pour les Animaux de Compagnie d’Espèces
                        Domestiques) avec l'option Chien. J'ai moi-même une chienne du nom de Tessa, c'est une Aldeutcher Shaferhunde
                        adorable. Vous pourrez voir plus bas les services que je propose.
                    </p>
                </div>
                </div>
                <div className='chien-container'>
                <div className="chien-carousel">
                        <button className="carousel-button previous" onClick={handlePrevious}><i className="fa-solid fa-circle-chevron-left"></i></button>
                    <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="chien-image" />
                        <button className="carousel-button next" onClick={handleNext}><i className="fa-solid fa-circle-chevron-right"></i></button>
                </div>
                <div className="chien-description">
                    <h2>Tessa</h2>
                    <p>
                        Tessa est née le 08/04/2022, c’est une <span className="hover-text">Aldeutcher Shaferhunde*<span className="tooltip-text">L’aldeutcher shaferhunde aussi appelé ancien type de berger allemand. Il s’agit donc d’une acienne race de berger allemand rustique avec les poils longs et le dos droit.</span></span> qui provient d’un grand élevage. Cette race est peu
                        connue mais elle ressemble beaucoup au Berger Allemand. Tessa est très vive et joueuse, mais elle est aussi très
                        bien éduquée. Elle continue d'apprendre beaucoup en raison de son jeune âge, mais dans un an, elle sera prête à
                        travailler avec moi pour aider vos loulous. Elle peut être sociable et apprendre plein d'autres choses. Elle est
                        aussi bien en chien de travail qu'en chien de famille. Elle est agréable au quotidien.
                    </p>
                </div>
                </div>
            </div>
        </div>
        </main>
    );
}