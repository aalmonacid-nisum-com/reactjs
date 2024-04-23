const DetalleProductos = () => {
  return (
    <>
    <div class="imagen-principal">
        <img src="/images/fotos/foto-home-02.png" class="img-fluid" width="100%" alt="Nuestros Productos" />
    </div>

    <section class="productos mt-4">
        <div class="container">
            <h1>Nuestros Productos</h1>
            <div class="text mb-4">
                Cada producto que encuentras aquí ha sido cuidadosamente seleccionado para reflejar la autenticidad y calidad que caracterizan al sur de Chile. 
            </div>

            <div class="row">
                <div  class="col-12 col-md-4 col-lg-3">
                    <div class="menu-content">
                        <div class="dropdown d-md-none w-100 mb-4">
                            <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Nuestros productos
                            </button>
                            <ul class="dropdown-menu">
                              <li><a class="dropdown-item" href="productos.html">Aceites</a></li>
                              <li><a class="dropdown-item" href="productos.html">Comida preparada</a></li>
                              <li><a class="dropdown-item" href="productos.html">Destacados</a></li>
                              <li><a class="dropdown-item" href="productos.html">Mariscos</a></li>
                              <li><a class="dropdown-item" href="productos.html">Destacados</a></li>
                              <li><a class="dropdown-item" href="productos.html">Para picar</a></li>
                              <li><a class="dropdown-item" href="productos.html">Pescados</a></li>
                              <li><a class="dropdown-item" href="productos.html">Postres</a></li>
                              <li><a class="dropdown-item" href="productos.html">Promociones</a></li>
                            </ul>
                        </div>

                        <nav class="d-none d-md-block">
                            <ul>
                                <li><a href="">Aceites</a></li>
                                <li><a href="">Comida preparada</a></li>
                                <li><a href="">Destacados</a></li>
                                <li><a href="">Mariscos</a></li>
                                <li><a href="">Para picar</a></li>
                                <li><a href="">Pescados</a></li>
                                <li><a href="">Postres</a></li>
                                <li><a href="">Promociones</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div class="col-12 col-md-8 col-lg-9">
                    <div class="products-details mb-4">
                        <div class="row">
                            <div class="col-12 col-md-5">
                                <figure class="image">
                                    <img src="/images/fotos/erizos.jpeg" class="img-fluid" width="100%" alt="Pack 15 Ostras medianas" />
                                </figure>
                            </div>

                            <div class="col-12 col-md-7">
                                <div class="details">
                                    <h2 class="title">Pack 15 Ostras medianas</h2>
                                    <div class="price">$10.990</div>
                                    <p>Ostras, pack de 15 unidades en bandejas.<br />Producto fresco.</p>
                                    <p>
                                        SKU: 25-ostras-mediana<br />Categorías: Mariscos, Promociones
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </section>
    </>
  )
}

export default DetalleProductos
