import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import Navbar from "./components/layout/header/navbar/Navbar";
import Topbar from "./components/layout/header/topbar/Topbar";
import HomeContainer from "./components/layout/pages/home/homeContainer/HomeContainer";
import Footer from "./components/layout/footer/Footer";
import Tienda from "./components/layout/pages/tienda/Tienda";
import Conocenos from "./components/layout/pages/conocenos/Conocenos";
import ProductosHome from "./components/layout/pages/productos/portadaProductos/Productos";
import Recetas from "./components/layout/pages/recetas/Recetas";
import ScrollToTop from "./components/layout/ScrollToTop";
import Contactanos from "./components/layout/pages/formularios/contactanos/Contactanos";
import DetalleProductos from "./components/layout/pages/productos/detalleProductos/DetalleProductos";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Topbar
          whatsappNumber="+569 9999 9999"
          instagramLink="https://www.instagram.com/"
          facebookLink="https://www.facebook.com/"
        />
        <Navbar Link={Link} useLocation={useLocation}/>
        <main className="main">
          <Routes>
            <Route path="/" element={<HomeContainer />} />
            <Route path="/tienda" element={<Tienda />} />
            <Route path="/conocenos" element={<Conocenos />} />
            <Route path="/productos" element={<ProductosHome />} />
            <Route path="/recetas" element={<Recetas />} />
            <Route path="/contactanos" element={<Contactanos />} />
            <Route path="/detalleProductos" element={<DetalleProductos />} />
          </Routes>
        </main>
        <Footer Link={Link} />
      </ScrollToTop>
      
    </BrowserRouter>
  );
  
}

export default App
