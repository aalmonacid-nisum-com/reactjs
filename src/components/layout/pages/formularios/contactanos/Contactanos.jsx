const Contactanos = () => {
  return (
    <>
        <div class="imagen-principal">
            <img src="/images/fotos/foto-home.png" class="img-fluid" width="100%" alt="Contacto" />
        </div>

        <section class="contacto my-5">
            <div class="container">
                <h1>Contacto</h1>

                <div class="row">
                    <div class="col-12 col-md-4 col-lg-5">
                        <div class="text-form mb-3">
                            Nos encantaría escucharte. Si tienes alguna pregunta, comentario o simplemente quieres saludar, ¡no dudes en ponerte en contacto con nosotros! Estamos aquí para ayudarte en lo que necesites.
                        </div>
                    </div>

                    <div class="col-12 col-md-8 col-lg-7">
                        <div class="formulario">
                            <form action="hola.html" id="formContacto">
                                <div class="row">
                                    <div class="col-12 col-lg-6">
                                        <div class="row-form">
                                            <input type="text" class="form-control" name="nombre" id="nombre" placeholder="Ingresa tu nombre" required />
                                        </div>
                
                                        <div class="row-form">
                                            <input type="text" class="form-control" name="apellido" id="apellido" placeholder="Ingresa tu apellido" required />
                                        </div>
                
                                        <div class="row-form">
                                            <input type="email" class="form-control" name="email" id="email" placeholder="Ingresa tu correo" required />
                                        </div>
                
                                        <div class="row-form">
                                            <input type="text" class="form-control" name="telefono" id="telefono" placeholder="Ingresa tu teléfono" required />
                                        </div>
                                    </div>
                
                                    <div class="col-12 col-lg-6">
                                        <div class="row-form">
                                            <textarea class="form-control" name="mensaje" id="mensaje" cols="30" rows="10" placeholder="Ingresa tu mensaje"></textarea>
                                        </div>

                                        <div class="boton">
                                            <button type="submit" class="btn btn-primary w-50">Enviar</button>
                                        </div>
                
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </>
  )
}

export default Contactanos
