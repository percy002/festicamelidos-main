import { useState } from "react";
import ContentIndex from "./ContentIndex";
import Footer from "../UI/Footer";
import logoCamelidos from "../../assets/images/logos/logo_camelidos_2.webp";
import videoCamelidos from "../../assets/videos/feria-camelidos.mp4";
const ContentIndex2 = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };
    return (
        <>
            <section className="py-10 bg-concrete-50 text-xl ">
                <div className="w-[85%] mx-auto flex flex-col-reverse md:flex-row px-5 gap-x-5 md:items-center">
                    <div className="flex-1 flex flex-col">
                        <h3 className="text-primary">Reseña</h3>
                        <p className="text-justify text-gray-700">
                        El Festival de Camélidos Andinos 2024, 
                        celebrado en la ciudad de Cusco, ha sido una experiencia 
                        inolvidable que resalta 
                        la rica herencia cultural y la biodiversidad 
                        única de los Andes peruanos. Este evento, que 
                        atrae a turistas y locales por igual, es una 
                        celebración vibrante de la importancia histórica 
                        y económica de los camélidos en la región.
                        </p>
                        {/* <Link href="/informacion_general" className="bg-primary rounded-full text-white w-fit mt-4 px-4 py-1 border-4 hover:border-primary hover:bg-white hover:text-primary">
                            Leer Mas
                        </Link> */}
                        
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-center">
                            <img
                                src={logoCamelidos}
                                alt=""
                                className="object-cover w-[50vh] h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-10 bg-[#734524] bg-opacity-70 text-xl">
                <div className="w-[85%] mx-auto flex flex-col-reverse xl:flex-row px-5 gap-x-10 gap-y-8 md:items-center ">
                    <div className="flex-1">
                        <div className="flex justify-center">
                            {/* <ReactPlayer
                                url="https://www.fao.org/videos/iycamelidslibraries/default-video-library/iyc24.mp4"
                                controls={true}
                                className="object-cover w-[50vh] h-auto"
                                // playing={isPlaying}
                                // onPlay={() => setIsPlaying(true)}
                                // onPause={() => setIsPlaying(false)}
                                // onEnded={() => setIsPlaying(false)}
                            /> */}
                            {/* <iframe width="700" height="400" src="https://www.youtube.com/embed/doTwMlkl-Kg" title="Año Internacional de los Camélidos 2024 - identidad visual" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                            <video src={videoCamelidos} className="max-w-full mx-auto aspect-video" controls autoPlay poster={logoCamelidos}></video>
                            {/* {!isPlaying && (
                                <div
                                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                                >
                                    <div className="w-24 h-24 rounded-full bg-white bg-opacity-50 flex items-center justify-center text-gray-700">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            className="w-12 h-12"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M6 19V5l12 7-12 7z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            )} */}
                        </div>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-white">Video</h3>
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
            <ContentIndex />
            {/*<MunisLogos/>*/}
            <Footer />
        </>
    );
};
export default ContentIndex2;
