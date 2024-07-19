import videoCamelidos from "../../assets/videos/feria-camelidos.mp4";
import logoCamelidos from "../../assets/images/logos/logo_camelidos.png";

const PromocionVideo = () => {
  return (
    <section className="py-10 bg-[#734524] bg-opacity-70 text-xl">
                <div className="w-[85%] mx-auto flex flex-col-reverse xl:flex-row px-5 gap-x-10 gap-y-8 md:items-center ">
                    <div className="flex-1">
                        <div className="flex justify-center">                            
                            <video src={videoCamelidos} className="w-full mx-auto aspect-video" controls poster={logoCamelidos}></video>
                            
                        </div>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-white">Video</h2>
                        <p className="text-justify text-white">
                        Con la participación de los mejores exponentes 
                        de la crianza y manejo de camélidos, así como de la 
                        producción artesanal y agroindustrial regional, inició 
                        el esperado “Festival de Camélidos Andinos 2024”. 
                        Esta actividad, organizada por las gerencias del 
                        Gobierno Regional y el Comité Organizador, 
                        destaca por la incorporación de tecnología avanzada 
                        aplicada a la producción, ofreciendo a los visitantes 
                        una experiencia enriquecedora que fusiona tradición e innovación.
                        </p>
                    </div>
                </div>
            </section>
  )
}
export default PromocionVideo