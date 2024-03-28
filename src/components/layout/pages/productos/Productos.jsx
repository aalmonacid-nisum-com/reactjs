const Productos = ({ imagen, nombre, precio, descripcion }) => {
    return (
        <div className="d-flex align-items-center">
            <img className="img-fluid rounded" src={imagen} alt={nombre} />
            <div className="w-100 d-flex flex-column text-start ps-4">
                <h3 className="d-flex justify-content-between border-bottom pb-2">
                    <div>{nombre}</div>
                    <small className="price">{precio}</small>
                </h3>
                <div className="text">{descripcion}</div>
            </div>
        </div>
    );
}

export default Productos;
