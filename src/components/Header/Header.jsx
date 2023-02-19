import './Header.css'
import logo from './logo.jpg'
import React, { useState, useEffect } from 'react';

const Header = () => {
    const [isChecked, setIsChecked] = useState(false);
    const handleCheck = () => {
        setIsChecked(!isChecked);
    };
    return (
        <header id='header'>
            <div class="contenedor">
                <div class="frame-header">
                    <img src={logo} alt="logo" />
                    <nav>
                        <a href="#header">Inicio</a>
                        <a href="#acercami">Acerca de mi</a>
                        <a href="#portfolio">Portfolio</a>
                        <a href="#opiniones">Clientes</a>
                        <a href="#servicios">Servicios</a>
                        <a href="#blog">Blog</a>
                        <a href="#contacto">Contacto</a>
                        <a className='btn-cv' href="./cv.pdf" target="_blank">Descargar CV</a>
                    </nav>
                    <div className='btnHam'>
                        <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
                        <a className='iconoHam' onClick={handleCheck}>{isChecked ? <i className='bi bi-list ' /> : <i className='bi bi-list' />}</a>
                        {isChecked && <div className="navHam">
                            <a href="#header" onClick={handleCheck}>Inicio</a>
                            <a href="#acercami" onClick={handleCheck}>Acerca de mi</a>
                            <a href="#portfolio" onClick={handleCheck}>Portfolio</a>
                            <a href="#opiniones" onClick={handleCheck}>Clientes</a>
                            <a href="#servicios" onClick={handleCheck}>Servicios</a>
                            <a href="#blog" onClick={handleCheck}>Blog</a>
                            <a href="#contacto" onClick={handleCheck}>Contacto</a>
                        </div>}
                    </div>
                </div>
            </div>
        </header >

    )
}

export { Header }