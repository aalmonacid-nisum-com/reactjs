import ProductosCards from "../productosCards/ProductosCards";

const ListaProductos = ({ productos }) => {
    return (
        <div className="row g-4">
            {productos.map((producto) => (
                <div className="col-lg-6" key={producto.id}>
                    <ProductosCards 
                        imagen={producto.imagen}
                        nombre={producto.nombre}
                        precio={producto.precio}
                        descripcion={producto.descripcion}
                    />
                </div>
            ))}
        </div>
    );
}

export default ListaProductos;
