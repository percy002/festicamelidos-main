import videoCamelidos from "../../assets/videos/feria-camelidos.mp4";
import logoCamelidos from "../../assets/images/logos/logo_camelidos.png";

const PromocionVideo = () => {
  return (
    <section className="py-10 bg-[#734524] bg-opacity-70 text-xl">
      <div className="w-[85%] mx-auto flex flex-col-reverse xl:flex-row px-5 gap-x-10 gap-y-8 md:items-center ">
        <div className="flex-1">
          <div className="flex justify-center">
            <video
              src={videoCamelidos}
              className="w-full mx-auto aspect-video"
              controls
              poster={logoCamelidos}
            ></video>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-white">Presentación</h2>
          <p className="text-justify text-white">
            Según Resolución Ministerial N'429-2012-A6, cada 1 de agosto se
            conmemora el Dia Nacional de la Alpaca, donde se destaca la labor
            que cumplen a diario los criadores de las regiones alto andinas de
            nuestro país.
          </p>
          <p className="mt-2 text-justify text-white">
            El Gobierno Regional del Cusco y las Instituciones Públicas y
            Privadas agremiadas por la Mesa Técnica Camélidos de la región
            Cusco, organizan el "FESTIVAL INTERNACIONAL DE CAMÉLIDOS, CUSCO
            2024" en conmemoración del "Año Internacional de los camélidos",
            evento que se llevará a cabo los días 01 al 04 de agosto del
            presente año 2024.
          </p>
        </div>
      </div>
    </section>
  );
};
export default PromocionVideo;
