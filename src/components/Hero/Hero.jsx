import './Hero.css'
import heroImg from './hero.png'

const Hero = () => {
    return (
        <section className="hero" id='hero'>
            <div className="contenedor">
                <div className="frame-hero">
                    <div className="hero-left">
                        <p className="p-hl-welcome">
                            Bienvenidos a mi Portfolio
                        </p>
                        <h1>
                            Hola, mi nombre es Eduardo Alberto
                        </h1>
                        <h1>
                            <span>Professional</span> Sysadmin & Coder
                        </h1>
                        <p>
                            Vivo en Bahía Blanca, Provincia de Buenos Aires. Actualmente soy Sysadmin en una institución de salud y dirijo la dirección técnica de los servicios de infraestructura local y en la nube. También soy el principal referente para todo lo relacionado con
                            AWS, virtualización, seguridad en la nube, networking, monitoreo de servidores, apoyo al área de desarrollo y soporte al usuario final.
                        </p>
                        <a className="btn-hl" href="#contacto">Contratarme</a>
                    </div>
                    <div className="hero-right">
                        {/* <img src="./img_hero.jpg" alt="" /> */}
                        <img src={heroImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export { Hero }