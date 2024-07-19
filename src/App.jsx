import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarFB from './components/UI/NavbarFB';
import Footer from './components/UI/Footer';
import Home from './components/Home';
import Nosotros from './components/home/Nosotros';


function App() {
  return (
    <Router>
      <div className="App">
        <NavbarFB /> {/* Incluye el encabezado aquí */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </main>
        <Footer />

      </div>
    </Router>
  )
}

export default App
