import Topbar from "./components/layout/header/topbar/Topbar"
import Navbar from "./components/layout/header/navbar/Navbar"
import Footer from "./components/layout/footer/Footer"
import HomeContainer from "./components/layout/pages/home/homeContainer/HomeContainer"

function App() {
  return (
    <>
      <Topbar 
        whatsappNumber="+569 9999 9999"
        instagramLink="https://www.instagram.com/"
        facebookLink="https://www.facebook.com/"
      />
      <Navbar />
      <main className="main">

        <HomeContainer />

      </main>
      <Footer />
    </>
  )
}

export default App
