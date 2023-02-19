
import './Pie.css'

const Pie = () => {

    return (
        <footer>
            <div class="contenedor">
                <div class="frame-footer">
                    <div class="footer-up">
                        <div class="footer-up-1">
                            <img src="./footer-logo.png" alt="" />
                            <p class="footer600">Calle sin Numero 12345</p>
                            <p class="footer600">8000 - Bs As - Argentina</p>
                            <div class="footer-redes">
                                <a href="http://www.facebook.com" target="_blank"><i class="bi bi-facebook"></i></a>
                                <a href="http://web.whatsapp.com" target="_blank"><i class="bi bi-whatsapp"></i></a>
                                <a href="http://www.linkedin.com" target="_blank"><i class="bi bi-linkedin"></i></a>
                                <a href="http://www.twitter.com" target="_blank"><i class="bi bi-twitter"></i></a>
                                <a href="http://www.instagram.com" target="_blank"><i class="bi bi-instagram"></i></a>
                            </div>
                        </div>
                        <div class="footer-up-2">
                            <p class="footer600">Categorias</p>
                            <a href="#portfolio">Todos</a>
                            <a href="#portfolio">CSS</a>
                            <a href="#portfolio">HTML</a>
                            <a href="#portfolio">Javascript</a>
                            <a href="#portfolio">React</a>
                        </div>
                        <div class="footer-up-3">
                            <p class="footer600">Links utiles</p>
                            <a href="#header">Inicio</a>
                            <a href="#acercami">Acerca de mi</a>
                            <a href="#portfolio">Portfolio</a>
                            <a href="#contacto">Contacto</a>
                        </div>
                        <div class="footer-up-4">
                            <p class="footer600">¡En Contacto!</p>
                            {/* <div class="suscribirse">
                                <input type="text" class="suscribirse-input" placeholder="Suscribirse" />
                                <i class="bi bi-play-circle-fill suscribirse-icono"></i>
                            </div> */}
                            <div class="footer-telefono">
                                <i class="bi bi-telephone-fill icono-telefono"></i>
                                <p class="footer300">&nbsp;+54 291 1234567</p>
                            </div>
                            <p class="footer300"><i class="bi bi-envelope-fill"></i>&nbsp;eduardo.alberto@gmail.com</p>

                        </div>
                    </div>
                    <div class="footer-down">
                        <div class="linea-horizontal"></div>
                        <div class="renglon-footer">
                            <p class="renglon-izq">Hecho con <i class="bi bi-heart-fill"></i> por eduardodsg.com</p>
                            <p class="renglon-cen">@Eduardo Alberto - 2023</p>
                            <p class="renglon-der">
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export { Pie }