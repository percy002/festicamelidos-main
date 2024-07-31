import logoCamelidos from "../../assets/images/logos/logo_camelidos.png";

const Resena = () => {
  return (
    <section className="py-10 bg-concrete-50 text-xl ">
      <div className="w-[85%] mx-auto flex flex-col-reverse xl:flex-row px-5 gap-x-5 xl:items-center">
        <div className="flex-1 flex flex-col">
          <h2 className="text-primary">Reseña</h2>
          <p>
            Los camélidos ocupan un lugar primordial en la cultura, la economía,
            la seguridad alimentaria y los medios de subsistencia de las
            comunidades que habitan los altiplanos andinos y las tierras áridas
            y semiáridas de África y Asia, en particular entre los Pueblos
            Indígenas. Aun en condiciones climáticas extremas, siguen
            produciendo fibra y alimentos nutritivos. En este sentido,el Año
            Internacional de los Camélidos representa una oportunidad sin igual
            de concienciar sobre la función que tienen los camélidos para
            generar resiliencia ante el cambio climático, especialmente en las
            montañas y las tierras áridas y semiáridas.
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
