import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarFB from './components/UI/NavbarFB';
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
            <Route path="/Nosotros" element={<Nosotros />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
