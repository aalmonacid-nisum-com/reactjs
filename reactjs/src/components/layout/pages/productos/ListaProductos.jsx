import Productos from './Productos';

const ListaProductos = ({ productos }) => {
    return (
        <div className="row g-4">
            {productos.map((producto, index) => (
                <div className="col-lg-6" key={index}>
                    <Productos 
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
