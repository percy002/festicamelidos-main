import galeria1 from "../../assets/images/camelidos/galeria/galeria1.jpg";
import galeria2 from "../../assets/images/camelidos/galeria/galeria2.jpeg";
import galeria3 from "../../assets/images/camelidos/galeria/galeria3.jpeg";
import Header from "../UI/Header";
import logoCamelidos from "../../assets/images/logos/logo_camelidos.png";
import CarouselMain from "./CarouselMain";

const Nosotros = () => {
  return (
    <>
    <div className="">
      <Header titleHeader={"Viernes 02 de Agosto"} contentHeader={"Participa de nuestras actividades del día."} />
      <section className="px-4 md:px-12 py-4">
        <div className="flex flex-col lg:flex-row gap-y-4" >
          <div className="flex-1 flex justify-center">
            <div className="text-primary ">
              <h3 className="text-center leading-none mb-0">ACTIVIDADES</h3>
              <ul className="text-center font-bold text-base leading-5 py-4">
                <li className="py-2">06:00 am <p className="text-gray-700 text-pretty">Inspección y apertura del campo ferial a cargo del comisario general</p>
                </li>
                <li className="py-2">08:00 am
                  <p className="text-gray-700 text-pretty">Rueda de Negocios</p>
                  <p className="text-gray-700 text-pretty">Juzgamiento de alpacas Huacaya registradas</p>
                </li>
                <li className="py-2">01:00 pm
                  <p className="text-gray-700 text-pretty">Juzgamiento de alpacas Suri registradas</p>
                </li>
                <li className="py-2">02:00 pm
                  <p className="text-gray-700 text-pretty">Pasarela de moda Cusco Alpaca</p>
                </li>
                <li className="py-2">05:00 pm
                  <p className="text-gray-700 text-pretty">Presentación artístico cultural</p>
                </li>
                <li className="py-2">08:00 pm
                  <p className="text-gray-700 text-pretty">Cierre del campo ferial</p>
                </li>
              </ul>
              
            </div>
          </div>


        </div>
      </section>

    </div>
    <CarouselMain/>
    </>
  );
};
export default Nosotros;
