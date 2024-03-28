const Carrusel = () => {
  return (
    <div id="carruselHome" className="carousel slide mb-6" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carruselHome" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carruselHome" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="/src/assets/images/fotos/foto-home.png" className="img-fluid" width="100%" alt="Quiénes somos" />
                <div className="container">
                    <div className="carousel-caption text-start">
                        <div className="text">
                            <h2>Quiénes somos</h2>
                            <p className="text">Seleccionamos productos de primera calidad y los llevamos a tu mesa al mejor precio.</p>
                            <p><a className="btn btn-lg btn-primary" href="pages/conocenos.html">Leer más</a></p>
                        </div>
                    </div>
                </div>
              </div>

              <div className="carousel-item">
                <img src="/src/assets/images/fotos/foto-home-02.png" className="img-fluid" width="100%" alt="Recetas" />
                <div className="container">
                  <div className="carousel-caption text-start">
                    <div className="text">
                        <h2>Recetas</h2>
                        <p className="text">Disfruta y sorprende con las más ricas y variadas recetas, junto a nuestra calidad y sabor premium.</p>
                        <p><a className="btn btn-lg btn-primary" href="#">Leer más</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carruselHome" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carruselHome" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
        </div>
  )
}

export default Carrusel
