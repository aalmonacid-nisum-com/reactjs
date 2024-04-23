import Carrusel from "../carrusel/Carrusel"
import NuestrosValores from "../nuestrosValores/NuestrosValores"
import Ubicacion from "../ubicacion/Ubicacion"
import ListaProductos from "../../productos/listaProductos/ListaProductos";
import { productosPromociones, productosCongelados, productosMariscos } from '../../productos/productosData';

const HomeContainer = () => {
    
    return (
    
    <>

    <Carrusel />
    
    <section className="home-productos mt-4 mb-5">
            <div className="container">
                <div className="text-center">
                    <h1 className="title">Nuestros Productos</h1>
                    <h2 className="subtitle mb-3"><em>Más populares</em></h2>
                </div>

                <div className="tab-products text-center">
                    <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                        <li className="nav-item">
                            <a className="d-flex align-items-center text-start active" data-bs-toggle="pill" href="#promociones">
                                <i className="fa-solid fa-hand-holding-dollar fa-2x"></i>
                                <div className="ps-1">
                                    <h3>Promociones</h3>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="d-flex align-items-center text-start" data-bs-toggle="pill" href="#congelados">
                                <i className="fa fa-snowflake fa-2x"></i>
                                <div className="ps-1">
                                    <h3>Congelados</h3>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="d-flex align-items-center text-start" data-bs-toggle="pill" href="#mariscos">
                                <i className="fa fa-fish fa-2x"></i>
                                <div className="ps-1">
                                    <h3>Mariscos</h3>
                                </div>
                            </a>
                        </li>
                    </ul>
                    
                    <div className="tab-content">

                        <div id="promociones" className="tab-pane fade show active">
                            <ListaProductos productos={productosPromociones} />
                        </div>

                        <div id="congelados" className="tab-pane fade show">
                            <ListaProductos productos={productosCongelados} />
                        </div>

                        <div id="mariscos" className="tab-pane fade show">
                            <ListaProductos productos={productosMariscos} />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <NuestrosValores />

        <Ubicacion />
    </>
  )
}

export default HomeContainer
