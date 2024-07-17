import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import logoHistoria from "../../assets/images/paginaPrincipal/historia-footer.png";
const Footer = () => {
    return (
        <footer>
            <div>
                <ul className="social_icon">
                    <li>
                        <a target="_blank" href="https://www.facebook.com/story.php?story_fbid=1069320974741247&id=100049900642112&mibextid=oFDknk&rdid=orCuHZkV9R5WfzYq">
                            <FaFacebook />
                        </a>
                        
                    </li>
                    <li>
                        <a href=""></a>
                        <FaTiktok className="h-6 w-6"/>
                    </li>
                    <li>
                        <a href=""></a>
                        <FaYoutube />
                    </li>
                </ul>
            </div>
            <section>
                <div className="grupo-2">
                    <div className="container" id="container_Logos_Gore">
                        <img
                            className="logo_gore"
                            src={logoHistoria}
                            alt="Logo_Gobierno_Regional_Cusco"
                        />
                    </div>
                    <div className="par2">
                        <small>
                            &copy; 2024 - Todos los Derechos Reservados.
                        </small>
                    </div>
                </div>
            </section>
        </footer>
    );
};
export default Footer;
