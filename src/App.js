import AcercaDeMi from "./views/AcercaDeMi"
import Contacto from "./views/Contacto"
import Footer from "./views/Footer"
import Home from "./views/Home"
import Navbar from "./views/Navbar"
import Experiencia from "./views/Experiencia"
import Conocimientos from "./views/Conocimientos"
import Educacion from "./views/Educacion"

function App() {
  return (
    <>
    <Navbar />
    <Home />
    <Experiencia />
    <AcercaDeMi />
    <Conocimientos />
    <Educacion />
    <Contacto />
    <Footer />
    </>
  )
}

export default App