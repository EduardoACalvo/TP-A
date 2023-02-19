
import './Portfolio.css'
import React, { useState } from 'react';



const Portfolio = () => {
    const [images, setImages] = useState([
        { id: 1, src: './img-port-01.png', alt: 'Imagen 01', tags: ['CSS', 'HTML'], url: 'https://eduardoacalvo.github.io/Stats-preview-card-component/' },
        { id: 2, src: './img-port-02.png', alt: 'Imagen 02', tags: ['CSS', 'HTML'], url: 'https://eduardoacalvo.github.io/navbar02/' },
        { id: 3, src: './img-port-03.png', alt: 'Imagen 03', tags: ['CSS', 'HTML'], url: 'https://eduardoacalvo.github.io/navbar01/' },
        { id: 4, src: './img-port-04.png', alt: 'Imagen 04', tags: ['CSS', 'HTML'], url: 'https://eduardoacalvo.github.io/moxa/' },
        { id: 5, src: './img-port-05.png', alt: 'Imagen 05', tags: ['CSS', 'HTML'], url: 'https://eduardoacalvo.github.io/Single-price-grid-component/' },
        { id: 6, src: './img-port-06.png', alt: 'Imagen 06', tags: ['CSS', 'HTML'], url: 'https://eduardoacalvo.github.io/Frontendmentor.io--Product-preview-card-component/' },
        { id: 7, src: './img-port-07.png', alt: 'Imagen 07', tags: ['CSS', 'HTML'], url: 'https://eduardoacalvo.github.io/qr-code-component-main/' },
        { id: 8, src: './img-port-08.png', alt: 'Imagen 08', tags: ['Javascript'], url: 'https://eduardoacalvo.github.io/UTNwallet/' },
        { id: 9, src: './img-port-09.png', alt: 'Imagen 09', tags: ['React'], url: '' }
    ]);

    const [selectedTags, setSelectedTags] = useState([]);


    const clickFiltro = (tag) => {
        setSelectedTags([]);
        handleTagClick(tag)
    }

    const handleTagClick = (tag) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter(t => t !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    }

    const filteredImages = images.filter(image => {
        if (selectedTags.length === 0) {
            return true;
        } else {
            return image.tags.some(tag => selectedTags.includes(tag));
        }
    });

    return (
        <section class="portfolio" id='portfolio'>
            <div class="contenedor">
                <div class="frame-portfolio">
                    <h2>Mi Portfolio</h2>
                    <div class="barra-portfolio">
                        <a onClick={() => clickFiltro()}>Todo</a>
                        <a onClick={() => clickFiltro('CSS')}>CSS</a>
                        <a onClick={() => clickFiltro('HTML')}>HTML</a>
                        <a onClick={() => clickFiltro('Javascript')}>Javascript</a>
                        <a onClick={() => clickFiltro('React')}>React</a>
                    </div>
                    <div class="galeria">
                        {filteredImages.map(image => (
                            <a href={image.url} target="_blank"><img key={image.id} src={image.src} alt={image.alt} /></a>
                            // <img key={image.id} src={image.src} alt={image.alt} />
                        ))}
                    </div>
                    <button class="btn-gal" onClick={() => setSelectedTags([])}>Ver Todo</button>
                </div>
            </div>
        </section >
    );
};

export { Portfolio };