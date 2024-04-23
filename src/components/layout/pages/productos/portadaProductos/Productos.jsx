import { Link } from "react-router-dom";

const ProductosHome = () => {
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
                              Dropdown button
                            </button>
                            <ul class="dropdown-menu">
                              <li><a class="dropdown-item" href="#">Aceites</a></li>
                              <li><a class="dropdown-item" href="#">Comida preparada</a></li>
                              <li><a class="dropdown-item" href="#">Destacados</a></li>
                              <li><a class="dropdown-item" href="#">Mariscos</a></li>
                              <li><a class="dropdown-item" href="#">Destacados</a></li>
                              <li><a class="dropdown-item" href="#">Para picar</a></li>
                              <li><a class="dropdown-item" href="#">Pescados</a></li>
                              <li><a class="dropdown-item" href="#">Postres</a></li>
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
                    <div class="listado-productos">
                        <div class="row">
                            <div class="col-12 col-md-6 col-lg-4">
                                <div class="card mb-4">
                                    <Link to="/detalleProductos">
                                        <span class="badge position-absolute">Mariscos</span>
                                        <img src="/images/fotos/erizos.jpeg" class="img-fluid card-img-top" alt="Foto Producto" />
                                        <div class="card-body">
                                            <h5 class="card-title">Pack 25 Ostras medianas</h5>
                                            <p class="card-price">$10.990</p>
                                        </div>
                                    </Link>
                                    <a href="#" class="btn btn-primary">Agregar al carro</a>
                                </div>
                            </div>

                            <div class="col-12 col-md-6 col-lg-4">
                                <div class="card mb-4">
                                    <a href="productos-detalle.html">
                                        <span class="badge position-absolute">Pescados</span>
                                        <img src="/images/fotos/ostiones.jpeg" class="img-fluid card-img-top" alt="Foto Producto" />
                                        <div class="card-body">
                                            <h5 class="card-title">Pack 25 Ostras medianas</h5>
                                            <p class="card-price">$10.990</p>
                                        </div>
                                    </a>
                                    <a href="#" class="btn btn-primary">Agregar al carro</a>
                                </div>
                            </div>

                            <div class="col-12 col-md-6 col-lg-4">
                                <div class="card mb-4">
                                    <a href="productos-detalle.html">
                                        <span class="badge position-absolute">Pescados</span>
                                        <img src="/images/fotos/ostras.jpeg" class="img-fluid card-img-top" alt="Foto Producto" />
                                        <div class="card-body">
                                            <h5 class="card-title">Pack 25 Ostras medianas</h5>
                                            <p class="card-price">$10.990</p>
                                        </div>
                                    </a>
                                    <a href="#" class="btn btn-primary">Agregar al carro</a>
                                </div>
                            </div>

                            <div class="col-12 col-md-6 col-lg-4">
                                <div class="card mb-4">
                                    <a href="productos-detalle.html">
                                        <span class="badge position-absolute">Para picar</span>
                                        <img src="/images/fotos/ostras.jpeg" class="img-fluid card-img-top" alt="Foto Producto" />
                                        <div class="card-body">
                                            <h5 class="card-title">Pack 25 Ostras medianas</h5>
                                            <p class="card-price">$10.990</p>
                                        </div>
                                    </a>
                                    <a href="#" class="btn btn-primary">Agregar al carro</a>
                                </div>
                            </div>

                            <div class="col-12 col-md-6 col-lg-4">
                                <div class="card mb-4">
                                    <a href="productos-detalle.html">
                                        <span class="badge position-absolute">Pescados</span>
                                        <img src="/images/fotos/ostras.jpeg" class="img-fluid card-img-top" alt="Foto Producto" />
                                        <div class="card-body">
                                            <h5 class="card-title">Pack 25 Ostras medianas</h5>
                                            <p class="card-price">$10.990</p>
                                        </div>
                                    </a>
                                    <a href="#" class="btn btn-primary">Agregar al carro</a>
                                </div>
                            </div>

                            <div class="col-12 col-md-6 col-lg-4">
                                <div class="card mb-4">
                                    <a href="productos-detalle.html">
                                        <span class="badge position-absolute">Aceites</span>
                                        <img src="/images/fotos/ostras.jpeg" class="img-fluid card-img-top" alt="Foto Producto" />
                                        <div class="card-body">
                                            <h5 class="card-title">Pack 25 Ostras medianas</h5>
                                            <p class="card-price">$10.990</p>
                                        </div>
                                    </a>
                                    <a href="#" class="btn btn-primary">Agregar al carro</a>
                                </div>
                            </div>

                            <div class="col-12 col-md-6 col-lg-4">
                                <div class="card mb-4">
                                    <a href="productos-detalle.html">
                                        <span class="badge position-absolute">Postres</span>
                                        <img src="/images/fotos/ostras.jpeg" class="img-fluid card-img-top" alt="Foto Producto" />
                                        <div class="card-body">
                                            <h5 class="card-title">Pack 25 Ostras medianas</h5>
                                            <p class="card-price">$10.990</p>
                                        </div>
                                    </a>
                                    <a href="#" class="btn btn-primary">Agregar al carro</a>
                                </div>
                            </div>

                            <div class="col-12 col-md-6 col-lg-4">
                                <div class="card mb-4">
                                    <a href="productos-detalle.html">
                                        <span class="badge position-absolute">Mariscos</span>
                                        <img src="/images/fotos/ostras.jpeg" class="img-fluid card-img-top" alt="Foto Producto" />
                                        <div class="card-body">
                                            <h5 class="card-title">Pack 25 Ostras medianas</h5>
                                            <p class="card-price">$10.990</p>
                                        </div>
                                    </a>
                                    <a href="#" class="btn btn-primary">Agregar al carro</a>
                                </div>
                            </div>

                            <div class="col-12 col-md-6 col-lg-4">
                                <div class="card mb-4">
                                    <a href="productos-detalle.html">
                                        <span class="badge position-absolute">Mariscos</span>
                                        <img src="/images/fotos/ostiones.jpeg" class="img-fluid card-img-top" alt="Foto Producto" />
                                        <div class="card-body">
                                            <h5 class="card-title">Pack 25 Ostras medianas</h5>
                                            <p class="card-price">$10.990</p>
                                        </div>
                                    </a>
                                    <a href="#" class="btn btn-primary">Agregar al carro</a>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div class="paginador mt-4">
                        <ul>
                            <li><a href="#;">1</a></li>
                            <li><a href="#;">2</a></li>
                            <li><a href="#;">3</a></li>
                            <li><a href="#;">4</a></li>
                            <li><a href="#;">5</a></li>
                            <li><a href="#;">6</a></li>
                        </ul>
                    </div>

                </div>
            </div>

            

        </div>
    </section>
    </>
  )
}

export default ProductosHome
