import React, { useState, useEffect } from "react";

import CarouselMain from "./home/CarouselMain";
import Resena from "./home/Resena";

import slogan from "../assets/images/logos/logo_slogan_gore.png";
import logoFao from "../assets/images/logos/fao.png";
import logoInternacionalCamelidos from "../assets/images/logos/internacional-camelidos.png";
import logoalpacascusco from "../assets/images/logos/alpacas_cusco.png";
import fondoCamelidos from "../assets/images/camelidos/fondo_festicamelidos.png";
import fondoCamelidosMobile from "../assets/images/camelidos/fondo-camelidos-mobile.png";
import PromocionVideo from "./home/PromocionVideo";
import Noticias from "./home/Noticias";
import Participantes from "./home/Participantes";
const Home = () => {
  const [backgroundImage, setBackgroundImage] = useState(fondoCamelidos);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setBackgroundImage(fondoCamelidosMobile);
      } else {
        setBackgroundImage(fondoCamelidos);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="w-full h-[600px] md:h-[530px] lg:h-[125vh] relative">
        <div
          className="w-full h-full bg-cover bg-center md:bg-bottom  absolute mt-12 md:mt-0 "
          style={{
            backgroundImage: `url('${backgroundImage}')`,
          }}
        >
          <div className="w-full h-full absolute">
            <div className="w-full flex gap-4 md:gap-16 justify-between md:justify-center px-20 md:px-14 absolute top-4 md:top-[10%]">
              <div className="flex items-center">
                <img
                  src={slogan}
                  alt="logo gobierno regional del cusco"
                  className="w-36 md:w-[10rem] lg:w-[15rem] object-cover"
                />
              </div>
              <div className="flex items-center">
                <img
                  src={logoFao}
                  alt="logo fao"
                  className="w-16 md:w-[5rem] lg:w-[7rem] object-cover"
                />
              </div>
              <div className="flex items-center">
                <img
                  src={logoInternacionalCamelidos}
                  alt="logo Internacional Camelidos"
                  className="w-36 md:w-[10rem] lg:w-[20rem] object-cover"
                />
              </div>
              <div className="flex items-center">
                <img
                  src={logoalpacascusco}
                  alt="logo Alpacas Cusco"
                  className="w-36 md:w-[12rem] lg:w-[13rem] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <CarouselMain />
      <Resena />
      <PromocionVideo />
      <Noticias />
      {/* <Participantes /> */}
    </>
  );
};
export default Home;
