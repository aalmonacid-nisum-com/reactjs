import React from 'react'

const Conocenos = () => {
  return (
      <>
        <div class="imagen-principal">
            <img src="/images/fotos/foto-home-02.png" class="img-fluid" width="100%" alt="Conócenos" />
        </div>

        <section class="conocenos py-4">
            <div class="container">
                <h1>Conócenos</h1>
                <div class="text-intro">
                    <p>Cada producto que encuentras aquí ha sido cuidadosamente seleccionado para reflejar la autenticidad y calidad que caracterizan al sur de Chile. Desde los exquisitos ingredientes que se cultivan en sus campos hasta las delicias artesanales que cuentan historias centenarias, cada artículo que ofrecemos es una invitación a explorar y saborear una cultura profundamente arraigada.</p>
                </div>

                <div class="mision">
                    <h2>Misión:</h2>
                    <p>Nuestra misión es llevar lo mejor de esta región única a través de la comodidad de la plataforma digital, permitiendo a nuestros clientes descubrir, apreciar y disfrutar de los sabores exquisitos que caracterizan a esta región.</p>
                </div>
                
                <div class="vision">
                    <h2>Visión:</h2>
                    <p>Ser reconocidos como la principal tienda online de venta de productos del sur de Chile. Visualizamos un mundo en el que cada rincón tenga la oportunidad de saborear y disfrutar de la riqueza gastronómica de esta región única. Aspiramos a ser la elección natural para aquellos que buscan autenticidad y calidad en cada bocado.</p>
                </div>


                <div class="valores mb-4">
                    <h2>Valores</h2>
                    <p>Nuestro compromiso con el sur de Chile y su rica oferta gastronómica es el motor que impulsa cada uno de nuestros pasos. A través de nuestros valores fundamentales, trabajamos incansablemente para llevar la magia del sur a las mesas de todo el Chile.</p>
                </div>
                
                <section class="home-valores mb-5">
                    <div class="container">
                        <div class="text-center">
                            <h2 class="title">Nuestros Pilares</h2>
                            <h3 class="subtitle mb-4"><em>Nuestra principal ventaja es la calidad</em></h3>
                        </div>

                        <div class="row g-4">
                            <div class="col-lg-3 col-sm-6">
                                <div class="home-pilares rounded pt-3">
                                    <div class="p-4">
                                        <i class="fa-solid fa-3x fa-heart mb-4"></i>
                                        <h5>Vida sana</h5>
                                        <p>Promovemos una vida saludable mediante el consumo de productos del mar.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class="home-pilares rounded pt-3">
                                    <div class="p-4">
                                        <i class="fa fa-3x fa-utensils mb-4"></i>
                                        <h5>Servicio</h5>
                                        <p>Elegimos los mejores productos de nuestro mar al trabajar con productores locales certificados.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class="home-pilares rounded pt-3">
                                    <div class="p-4">
                                        <i class="fa-solid fa-3x fa-fish mb-4"></i>
                                        <h5>Sustentabilidad</h5>
                                        <p>Apoyamos a los productores locales que cumplan con las medidas medio ambientales.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class="home-pilares rounded pt-3">
                                    <div class="p-4">
                                        <i class="fa-solid fa-3x fa-palette mb-4"></i>
                                        <h5>Variedad</h5>
                                        <p>Cuidamos de manera especial la cadena de frío de nuestros productos.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </section>
      </>
    

    
  )
}

export default Conocenos
