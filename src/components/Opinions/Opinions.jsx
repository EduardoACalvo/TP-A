
import './Opinions.css'

const Opinions = () => {
    return (
        <section class="opiniones" id='opiniones'>
            <div class="contenedor">
                <div class="frame-opiniones">
                    <div class="titulos-opiniones">
                        <p class="op-titulo"><span>Testimonios</span></p>
                        <h2 class="oh2-titulo">Opiniones de nuestros clientes</h2>
                    </div>
                    <div class="cuadros-opiniones">
                        <div class="cuadro-o">
                            <div class="cuadro-ox">
                                <div class="linea-titulo-cuadro">
                                    <div class="foto-nombre-cargo">
                                        <img src="./img-edmon.jpg" alt="" />
                                        <div class="nombre-cargo">
                                            <h3>Edmon Albertson</h3>
                                            <h6>CEO</h6>
                                        </div>
                                    </div>
                                    <i class="bi bi-quote"></i>
                                </div>
                                <p>Profesional, atento y proactivo. Cuesta encontrar un grado de implicación igual. Totalmente recomendable</p>
                            </div>
                        </div>
                        <div class="cuadro-o">
                            <div class="cuadro-ox">
                                <div class="linea-titulo-cuadro">
                                    <div class="foto-nombre-cargo">
                                        <img src="./img-monica.jpg" alt="" />
                                        <div class="nombre-cargo">
                                            <h3>Monica Galindo</h3>
                                            <h6>Gerente de Operaciones</h6>
                                        </div>
                                    </div>
                                    <i class="bi bi-quote"></i>
                                </div>
                                <p>Agradezco el esfuerzo y trabajo realizado en mi app, ha quedado mejor de lo que esperaba y valoro sobre todo el seguimiento y la dedicación que han puesto en mi proyecto, gracias.</p>
                            </div>
                        </div>
                        <div class="cuadro-o3">
                            <div class="cuadro-ox">
                                <div class="linea-titulo-cuadro">
                                    <div class="foto-nombre-cargo">
                                        <img src="./img-juana.jpg" alt="" />
                                        <div class="nombre-cargo">
                                            <h3>Juana Francisca</h3>
                                            <h6>Dueña</h6>
                                        </div>
                                    </div>
                                    <i class="bi bi-quote"></i>
                                </div>
                                <p>Rápido, profesional y accesibles. Gracias sus servicios de diseño web y por su paciencia. Sin duda, seguramente los volveré a contactare</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}

export { Opinions }