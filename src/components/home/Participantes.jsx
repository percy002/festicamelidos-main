import desarrolloAgrario from "../../assets/images/logos/desarrollo_agrario.png";
import desarrolloEconomico from "../../assets/images/logos/desarrollo_economico.png";
import alpacasCusco from "../../assets/images/logos/alpacas_cusco.png";
import gercetur from "../../assets/images/logos/gertur.png";
import gerepro from "../../assets/images/logos/gerepro.png";
import geragri from "../../assets/images/logos/geragri.png";
import agropecuaria from "../../assets/images/logos/agropecuaria.png";
import agrorural from "../../assets/images/logos/agrorural.png";
import senasa from "../../assets/images/logos/senasa.png";
import escudo from "../../assets/images/logos/escudo.png";
import inves from "../../assets/images/logos/inves.png";
import grismpv from "../../assets/images/logos/grismpv.png";
import unsaac from "../../assets/images/logos/unsaac.png";
import minpro from "../../assets/images/logos/ministerio_de_la_produccion.png";
const Participantes = () => {
  return (
    <section className="pb-10">
      <div className="w-[85%] mx-auto ">
        <h2 className="text-center text-primary">Participantes</h2>
        <div className="flex flex-col gap-4">
          <div className="flex justify-around">
            <div className="flex items-center">
              <img src={desarrolloAgrario} alt="" className="w-full" />
            </div>
            <div className="flex items-center">
              <img src={desarrolloEconomico} alt="" className="w-full" />
            </div>
            <div className="flex items-center">
              <img src={alpacasCusco} alt="" className="w-full" />
            </div>
            <div className="flex items-center">
              <img src={gercetur} alt="" className="w-full" />
            </div>
          </div>
          <div className="flex justify-around">
            <div className="flex items-center">
              <img src={gerepro} alt="" className="w-full" />
            </div>
            <div className="flex items-center">
              <img src={geragri} alt="" className="w-full" />
            </div>
            <div className="flex items-center">
              <img src={agrorural} alt="" className="w-full" />
            </div>
            <div className="flex items-center">
              <img src={senasa} alt="" className="w-full" />
            </div>
            <div className="flex items-center">
              <img src={agropecuaria} alt="" className="w-full" />
            </div>
            
          </div>
          <div className="flex justify-around">
            <div className="flex items-center">
              <img src={escudo} alt="" className="w-full" />
            </div>
            <div className="flex items-center">
              <img src={inves} alt="" className="w-full" />
            </div>
            <div className="flex items-center">
              <img src={grismpv} alt="" className="h-8 md:h-12" />
            </div>
            <div className="flex items-center">
              <img src={minpro} alt="" className="h-8 md:h-12" />
            </div>
            <div className="flex items-center">
              <img src={unsaac} alt="" className="w-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Participantes;
