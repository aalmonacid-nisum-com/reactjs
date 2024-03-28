const Topbar = ({ whatsappNumber, instagramLink, facebookLink }) => {
    {/* Aquí agregue unos props como ejemplo inicial que puedo reutilizar en el footer, cuando separe las funciones del componente */}
    const handleInstagramClick = () => {
        window.open(instagramLink, '_blank');
    };

    const handleFacebookClick = () => {
        window.open(facebookLink, '_blank');
    };
    
    return (
        <div className="top-bar">
            <div className="container-fluid">
                <div className="row">
                    <div className="col me-auto">
                        <i className="fa-brands fa-whatsapp"></i> <strong>PIDE POR WHATSAPP:</strong> <a href={`tel:${whatsappNumber}`}>{whatsappNumber}</a>
                    </div>
                    <div className="col-auto rrss">
                        <a href="#;" onClick={handleInstagramClick}>
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="#;" onClick={handleFacebookClick}>
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
