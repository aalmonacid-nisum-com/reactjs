const NuestrosValores = () => {
  return (
    <section className="home-valores mb-5">
        <div className="container">
            <div className="text-center">
                <h2 className="title">Nuestros Pilares</h2>
                <h3 className="subtitle mb-4"><em>Nuestra principal ventaja es la calidad</em></h3>
            </div>

            <div className="row g-4">
                <div className="col-lg-3 col-sm-6">
                    <div className="home-pilares rounded pt-3">
                        <div className="p-4">
                            <i className="fa-solid fa-3x fa-heart mb-4"></i>
                            <h5>Vida sana</h5>
                            <p>Promovemos una vida saludable mediante el consumo de productos del mar.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="home-pilares rounded pt-3">
                        <div className="p-4">
                            <i className="fa fa-3x fa-utensils mb-4"></i>
                            <h5>Servicio</h5>
                            <p>Elegimos los mejores productos de nuestro mar al trabajar con productores locales certificados.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="home-pilares rounded pt-3">
                        <div className="p-4">
                            <i className="fa-solid fa-3x fa-fish mb-4"></i>
                            <h5>Sustentabilidad</h5>
                            <p>Apoyamos a los productores locales que cumplan con las medidas medio ambientales.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="home-pilares rounded pt-3">
                        <div className="p-4">
                            <i className="fa-solid fa-3x fa-palette mb-4"></i>
                            <h5>Variedad</h5>
                            <p>Cuidamos de manera especial la cadena de frío de nuestros productos.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default NuestrosValores
