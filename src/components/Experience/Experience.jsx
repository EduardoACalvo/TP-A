
import './Experience.css'

const Experience = () => {
    return (
        <section class="experiencia" id='experience'>
            <div class="contenedor">
                <div class="frame-experiencia">
                    <div class="titulos-experiencia">
                        <p class="ep-titulo"><span>Habilidades Personales</span></p>
                        <h2 class="eh2-titulo">Experiencia & Habilidades</h2>
                    </div>
                    <div class="cuadro-experiencia">
                        <div class="exp-left">
                            <p>A lo largo de los años he logrado capacitarme en las más variadas herramientas de desarrollo y también he adquirido conocimientos para tener un control integral de los sistemas que desarrollo y administro. Mis primeros lenguajes
                                de aprendizaje fueron Pascal, RM/Cobol y Visual Basic en la tecnicatura en computación de la escuela de comercio. Adquirí conocimientos de redes realizado las certificaciones CCN1, CCNA2, CCNA3 y CCNA4 de cisco También
                                tengo la certificación IT Essentials (ITE), que se presentan aspectos del hardware y el software de Cisco & HP Hice el curso de LINUX SYSTEM ADMINISTRATOR & Asterisk Admin en carreralinux Realice la Diplomatura universitaria
                                en PHP & MYSQL en la UTN
                            </p>
                            <a class="btn-exp" href="./cv.pdf" target="_blank">Descargar CV</a>
                        </div>
                        <div class="exp-right">
                            <div class="titulo-porcentaje">
                                <p>HTML & CSS</p>
                                <p class="nonegrita">85%</p>
                            </div>
                            <div class="barra-skills">
                                <div class="skills html"></div>
                            </div>
                            <div class="titulo-porcentaje">
                                <p>Javascript</p>
                                <p class="nonegrita">65%</p>
                            </div>
                            <div class="barra-skills">
                                <div class="skills js"></div>
                            </div>
                            <div class="titulo-porcentaje">
                                <p>PHP & MYSQL</p>
                                <p class="nonegrita">90%</p>
                            </div>
                            <div class="barra-skills">
                                <div class="skills php"></div>
                            </div>
                            <div class="titulo-porcentaje">
                                <p>Python & Bash Scripting</p>
                                <p class="nonegrita">90%</p>
                            </div>
                            <div class="barra-skills">
                                <div class="skills python"></div>
                            </div>
                            <div class="titulo-porcentaje">
                                <p>Gnu/Linux</p>
                                <p class="nonegrita">99%</p>
                            </div>
                            <div class="barra-skills">
                                <div class="skills linux"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export { Experience }