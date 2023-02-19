
import './Services.css'

const Services = () => {
    return (
        <section class="servicios" id='servicios'>
            <div class="contenedor">
                <div class="frame-servicios">
                    <div class="titulos-servicios">
                        <p class="sp-titulo"><span>¿Que hago?</span></p>
                        <h2 class="sh2-titulo">Servicios y soluciones</h2>
                    </div>
                    <div class="cuadros-servicios-r1">
                        <div class="cuadro-s1">
                            <div class="cuadro-x">
                                <img src="./img-virt.png" alt="" />
                                <h3>Virtualización</h3>
                                <p>La virtualización permite mejorar la agilidad, la flexibilidad y la escalabilidad de la infraestructura de TI. Algunas ventajas de la virtualización, como el aumento del rendimiento y de la disponibilidad de los recursos
                                    o la automatización de las operaciones, simplifican la gestión de la infraestructura de TI y permiten reducir los costes de propiedad y operativos.</p>
                            </div>
                        </div>
                        <div class="cuadro-s1">
                            <div class="cuadro-x">
                                <img src="./img-net.png" alt="" />
                                <h3>Networking</h3>
                                <p>Consiste en el despliegue, mantenimiento y monitoreo del engranaje de la red: switches, routers, cortafuegos, cableador normalizado, etc. Frecuentemente se incluyen algunas otras actividades como el mantenimiento de las
                                    instalaciones de red tales como los controladores y ajustes de las computadoras, servidores, VPN, etc..</p>
                            </div>
                        </div>
                        <div class="cuadro-s1">
                            <div class="cuadro-x">
                                <img src="./img-aws.png" alt="" />
                                <h3>Cloud Computing</h3>
                                <p>Amazon Web Services (AWS) es la plataforma en la nube más adoptada y completa en el mundo, que ofrece más de 200 servicios integrales de centros de datos a nivel global. Millones de clientes, incluso las empresas emergentes
                                    que crecen más rápido, las compañías más grandes están usando AWS para reducir los costos, aumentar su agilidad e innovar de forma más rápida.</p>
                            </div>
                        </div>


                        <div class="cuadro-s1">
                            <div class="cuadro-x">
                                <img src="./img-it.png" alt="" />
                                <h3>Soporte IT</h3>
                                <p>El soporte IT o soporte técnico informático se encarga de resolver los problemas técnicos de una empresa, ademas de ser capaz de diagnosticar y resolver problemas técnicos por teléfono, correo electrónico o chat de soporte
                                    en línea. Un técnico de soporte de TI tiene que estar preparado para recibir quejas/consultas clientes.</p>
                            </div>
                        </div>
                        <div class="cuadro-s1">
                            <div class="cuadro-x">
                                <img src="./img-scp.png" alt="" />
                                <h3>Automatización de Procesos</h3>
                                <p>No es viable que los empleados de una empresa estén realizando tareas repetitivas manualmente,es posible automatizar esos proceso que comúnmente se ejecutan manualmente y que hacen que las jornadas laborales sean aburridas
                                    y monotonas en tu entorno laboral. Mediante bash scripting, python web scraping, y otras se pueden automatizar gran cantidad de tareas.</p>
                            </div>
                        </div>
                        <div class="cuadro-s1">
                            <div class="cuadro-x">
                                <img src="./img-web.png" alt="" />
                                <h3>Desarrollo Web</h3>
                                <p>Me especializo en la creación de sitios para particulares y pequeñas empresas. No deberías tener que conformarte con soluciones baratas o plantillas genéricas. Proporciono diseños personalizados a precios asequibles. Con
                                    frecuencia, su sitio web es la primera impresión que reciben sus clientes, así que asegúrese de que sea una buena impresión.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export { Services }