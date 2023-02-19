
import './Contact.css'


const Contact = () => {


    return (
        <section class="contacto" id='contacto'>
            <div class="cuadro-titulo">
                <p>Contactarme</p>
            </div>
            <div class="contenedor">
                <div class="contacto-form">
                    <form action="https://formsubmit.co/edu5800@gmail.com" method="POST">
                        <input type="hidden" name="_next" value="http://localhost:3000/#contacto" />
                        <input type="hidden" name="_captcha" value="false" />
                        <div class="contacto-nya">
                            <div class="contacto-n">
                                <label for="email" class="etiqueta-formulario">Nombre</label>
                                <input type="text" class="flex-input input-nombre" placeholder="Ingrese su Nombre" />
                            </div>
                            <div class="contacto-a">
                                <label for="email" class="etiqueta-formulario etiqueta-apellido">Apellido</label>
                                <input type="text" class="flex-input input-apellido" placeholder="Ingrese su Apellido" />
                            </div>
                        </div>
                        <label for="email" class="etiqueta-formulario">Email</label>
                        <input type="emmial" name='email' class="flex-input" placeholder="Ingrese su Dirección de Email" />
                        <label for="" class="etiqueta-formulario">Mensaje</label>
                        <textarea name="mensaje" id="mensaje" cols="150" rows="10" placeholder="Escriba su Mensaje Aqui"></textarea>
                        <div class="enviar-contacto">
                            <button type='submit' className='btn-con'>Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>

    )
}

export { Contact }