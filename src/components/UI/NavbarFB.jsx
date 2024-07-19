import { useState, useEffect, useRef } from "react";
import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { Map } from "./Map";

const customNavbar = {
  root: {    
    inner: {
      base: "mx-auto flex flex-wrap items-center justify-end",
      fluid: {
        on: "",
        off: "container",
      },
    },
  },
  
};

function NavbarFB() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    // Agrega el listener al montar
    window.addEventListener("scroll", handleScroll);

    // Limpia el listener al desmontar
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
        theme={customNavbar}
      fluid
      className={`bg-primary text-white md:bg-transparent z-100 md:px-16 fixed z-50 w-full md:py-5 ${
        scrolled ? "md:bg-primary text-white" : "md:text-primary"
      } `}
    >
      
      <Navbar.Toggle className="text-white hover:bg-transparent" />
      <Navbar.Collapse className="mx-auto">
        <>
          <div className="font-bold text-lg flex justify-center">
            <Link to="/">INICIO</Link>
          </div>
          <div className="font-bold text-lg flex justify-center">
            <Link to="/Nosotros">NOSOTROS</Link>
          </div>

          <div className="font-bold text-lg flex justify-center">
            <a href="/assets/images/reglamento.pdf" target="_blank" rel="noopener noreferrer">REGLAMENTO</a>
          </div>

          <div className="font-bold text-lg flex justify-center">
            <a href="/assets/images/programa.pdf" target="_blank" rel="noopener noreferrer">PROGRAMA</a>
          </div>

          <div className="font-bold text-lg flex justify-center">
            <Map/>
          </div>
        </>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default NavbarFB;
