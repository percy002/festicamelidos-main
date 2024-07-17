import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";

function NavbarFB() {
    return (
        <Navbar fluid className="bg-primary z-100 md:px-16">
            <Navbar.Brand as={Link} href="/" className="">
                <HiHome className="h-10 w-10 text-white p-1" />
            </Navbar.Brand>
            <Navbar.Toggle className="text-white hover:bg-transparent" />
            <Navbar.Collapse className='md:flex-grow md:px-5'>
                <>
                    <div className="bg-white text-primary py-1 px-4 md:rounded-full font-bold text-base flex justify-center">
                        <Link to="/" className="text-center">
                            Inicio
                        </Link>
                    </div>
                    <div className="bg-white text-primary py-1 px-4 md:rounded-full font-bold text-base flex justify-center">
                        <Link to="/Nosotros">Nosotros</Link>
                    </div>
                    
                    <div className="bg-white text-primary py-1 px-4 md:rounded-full font-bold text-base flex justify-center">
                        <Link to="/">Contacto</Link>
                    </div>

                </>  
            </Navbar.Collapse>
        </Navbar>
    );
}
export default NavbarFB;
