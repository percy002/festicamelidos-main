import galeria1 from "../../assets/images/camelidos/galeria/alpaca1.png";
import galeria2 from "../../assets/images/camelidos/galeria/alpaca2.png";
import galeria3 from "../../assets/images/camelidos/galeria/alpaca3.png";
import galeria4 from "../../assets/images/camelidos/galeria/galeria1.jpg";
import galeria5 from "../../assets/images/camelidos/galeria/galeria2.jpeg";
import galeria6 from "../../assets/images/camelidos/galeria/galeria3.jpeg";
import Header from "../UI/Header";
import logoCamelidos from "../../assets/images/logos/logo_camelidos.png";
import { useScrollTop } from "../../hooks/useScrollTop";
const Nosotros = () => {
  useScrollTop();
  return (
    <div className="">
      <Header titleHeader={"Acerca de Nosotros"} contentHeader={"Conoce mejor nuestra historia."} />
      <section className="px-4 md:px-12 py-4">
        <div className="flex flex-col lg:flex-row gap-y-4" >
          <div className="flex-1 flex justify-center">
            <div className="text-primary ">
              <h3 className="text-center leading-none mb-0">Festicamelidos</h3>
              <p className="text-center font-bold text-base leading-5">
                INTERNACIONAL
              </p>
              <p className="text-center font-bold text-base leading-5">
                CUSCO 2024
              </p>
              <p className="text-gray-700 text-pretty">
                El Festival de Camélidos Andinos 2024, celebrado en la ciudad de
                Cusco, ha sido una experiencia inolvidable que resalta la rica
                herencia cultural y la biodiversidad única de los Andes
                peruanos. Este evento, que atrae a turistas y locales por igual,
                es una celebración vibrante de la importancia histórica y
                económica de los camélidos en la región.
              </p>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="flex justify-center w-8/12">
              <img
                src={logoCamelidos}
                alt=""
                className="object-contain w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      {/* galeria de fotos */}
      <section className="px-4 md:px-12 py-4">
        <h3 className="text-center text-primary">Galería de Fotos</h3>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-1/3 p-2">
            <img src={galeria1} alt="" className="w-full h-auto" />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-2">
            <img src={galeria2} alt="" className="w-full h-auto" />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-2">
            <img src={galeria3} alt="" className="w-full h-auto" />
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-1/3 p-2">
            <img src={galeria4} alt="" className="w-full h-auto" />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-2">
            <img src={galeria5} alt="" className="w-full h-full" />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-2">
            <img src={galeria6} alt="" className="w-full h-auto" />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Nosotros;
