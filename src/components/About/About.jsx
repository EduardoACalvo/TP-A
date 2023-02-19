
import './About.css'
import acercaImg from './about.png'

const About = () => {
    return (
        <section class="acercami" id='acercami'>
            <div class="contenedor">
                <div class="frame-acerca">
                    <div class="about-left">
                        <div class="texto-vertical">
                            <p>
                                <div class="vl"></div>Acerca de mi</p>
                        </div>
                        <img src={acercaImg} alt="" />
                        <div class="c-25exp">
                            <p>25</p>
                            <div class="p-25exp">
                                <p>Años de</p>
                                <p>experiencia</p>
                            </div>
                        </div>
                    </div>
                    <div class="about-right">
                        <div class="about-right-up">
                            <div class="ar-titulo">
                                <p>¿Porque me contratarías para tu próximo proyecto?</p>
                            </div>
                        </div>
                        <div class="about-right-bottom">
                            <div class="p-acerca">
                                <h2>Soy un apasionado de la <span>tecnología</span></h2>
                                <p>He estado en varios roles, en su mayoría relacionados con la infraestructura y adyacentes al desarrollador. Capitalizo mis 25 años de experiencia para mejorar los entornos tecnológicos que opero, construyo y mantengo. Me
                                    apasiona encontrar la manera correcta de implementar cualquier tecnología con la que estoy trabajando.
                                </p>
                                <p>Constantemente elevo a los equipos con los que trabajo implementando las mejores prácticas de la industria e investigando las tendencias de la industria que pueden mejorar nuestras herramientas y procesos.</p>
                                <a class="btn-ab" href="#portfolio">Ver todos los proyectos</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export { About }