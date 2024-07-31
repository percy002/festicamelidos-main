import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarFB from './components/UI/NavbarFB';
import Footer from './components/UI/Footer';
import Home from './components/Home';
import Nosotros from './components/home/Nosotros';
import Reglamento from './components/Reglamento';
import Programa from './components/Programa';
import Ubicacion from './components/Ubicacion';
import Actividad1 from './components/home/Actividad1';
import Actividad2 from './components/home/Actividad2';
import Actividad3 from './components/home/Actividad3';
import Actividad4 from './components/home/Actividad4';


function App() {
  return (
    <Router>
      <div className="App">
        <NavbarFB />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/reglamento" element={<Reglamento />} />
            <Route path="/programa" element={<Programa />} />
            <Route path="/ubicacion" element={<Ubicacion />} />
            <Route path="/actividad1" element={<Actividad1 />} />
            <Route path="/actividad2" element={<Actividad2 />} />
            <Route path="/actividad3" element={<Actividad3 />} />
            <Route path="/actividad4" element={<Actividad4 />} />
          </Routes>
        </main>
        <Footer />

      </div>
    </Router>
  )
}

export default App
