const Navbar = ({ Link, useLocation }) => {

    //agrego una funcion para agregar la clase activea navbar, dependiendo de la página que se esta mostrando
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? "active" : "";
    };
    return (
        <>
        <header className="header sticky-top">
            <nav className="navbar navbar-expand-md navbar-dark bg-header">
                <div className="container-fluid">
                    
                    <Link to="/" className="me-2 navbar-brand"><img src="/images/html/logo-empresa-blanco.svg" className="img-fluid" width="70" alt="CHef" /></Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${isActive("/")}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/tienda" className={`nav-link ${isActive("/tienda")}`}>Tienda</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className={`nav-link dropdown-toggle ${isActive('/productos')}`} to="#" data-bs-toggle="dropdown">Productos</Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/productos">Pescados</Link></li>
                                    <li><Link className="dropdown-item" to="/productos">Mariscos</Link></li>
                                    <li><Link className="dropdown-item" to="/productos">Postres</Link></li>
                                    <li><Link className="dropdown-item" to="/productos">Congelados</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${isActive("/promociones")}`} to="/productos">Promociones</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${isActive("/recetas")}`} to="/recetas">Recetas</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/conocenos" className={`nav-link ${isActive("/conocenos")}`}>Conócenos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${isActive("/contactanos")}`} to="/contactanos">Escríbenos</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="#" className="btn btn-primary py-2 px-4">Regístrate aquí</Link>
                            </li>
                        </ul>

                        <div className="nav-secondary d-flex">
                            <Link to="">
                                <i className="fa-solid fa-user"></i><br />Mi cuenta
                            </Link>
                            <Link to="">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </Link>
                            <Link to="">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        </>
  )
}

export default Navbar
