import { useScrollTop } from "../hooks/useScrollTop";
import Header from "./UI/Header";

const Ubicacion = () => {
  useScrollTop();
  return (
    <>
      <Header titleHeader={"UBICACIÓN"} contentHeader={"¿Cómo llegar?"} />
      <div className="relative w-full py-5 rounded-lg overflow-hidden">
        {/* Div para la imagen de fondo con opacidad */}
        <div className="absolute inset-0 bg-textura-gris bg-cover opacity-30 z-0"></div>
        {/* Contenedor del iframe, asegurándose de que esté por encima del fondo */}
        <div className="md:w-9/12 mx-auto relative z-10 bg-white rounded-md">
          <iframe
          
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1498.2997490712423!2d-71.97414590423281!3d-13.508944054553787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDMwJzMxLjciUyA3McKwNTgnMjUuNSJX!5e1!3m2!1ses!2spe!4v1722446751278!5m2!1ses!2spe"
            width="600"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0 w-full h-[500px] p-6"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Ubicacion;
