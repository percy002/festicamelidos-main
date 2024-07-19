import logoCamelidos from "../../assets/images/logos/logo_camelidos.png";

const Resena = () => {
  return (
    <section className="py-10 bg-concrete-50 text-xl ">
      <div className="w-[85%] mx-auto flex flex-col-reverse md:flex-row px-5 gap-x-5 md:items-center">
        <div className="flex-1 flex flex-col">
          <h2 className="text-primary">Reseña</h2>
          <p className="text-justify text-gray-700">
            El Festival de Camélidos Andinos 2024, celebrado en la ciudad de
            Cusco, ha sido una experiencia inolvidable que resalta la rica
            herencia cultural y la biodiversidad única de los Andes peruanos.
            Este evento, que atrae a turistas y locales por igual, es una
            celebración vibrante de la importancia histórica y económica de los
            camélidos en la región.
          </p>
          {/* <Link href="/informacion_general" className="bg-primary rounded-full text-white w-fit mt-4 px-4 py-1 border-4 hover:border-primary hover:bg-white hover:text-primary">
                            Leer Mas
                        </Link> */}
        </div>
        <div className="flex-1 flex justify-center">
          <div className="flex justify-center w-8/12">
            <img
              src={logoCamelidos}
              alt=""
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Resena;
