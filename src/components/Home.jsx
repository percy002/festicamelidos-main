import CarouselMain from "./home/CarouselMain"
import ContentIndex2 from "./home/ContentIndex2"
import DynamicCountDown from "./UI/DynamicCountDown"

import slogan from "../assets/images/logos/logo_slogan_gore.png"
import logoCamelidos from "../assets/images/logos/logo_camelidos_2.webp";
import fondoCamelidos from "../assets/images/camelidos/fondo_camelidos_editado.png";
const Home = () => {
  return (
    <>
        <div className="w-full h-[85vh] md:h-[90vh] relative">
            <div
                className="w-full h-full bg-cover bg-center absolute  "
                style={{
                    
                    backgroundImage:
                        `url('${fondoCamelidos}')`,
                }}
            >
                {<div className="absolute inset-0 bg-black bg-opacity-20"></div>}
                <div className="w-full h-full absolute">
                    <div className="h-full flex flex-col justify-between pt-8 pb-4">
                        <div className="w-full flex justify-between px-4 md:px-14">
                            <img
                                src={slogan}
                                alt="logo gobierno regional del cusco"
                                className="w-32 md:w-[14rem]"
                            />
                            <img
                                src={logoCamelidos}
                                alt="logo feria de huancaro 2024"
                                className="w-32 md:w-[18em]"
                            />
                        </div>
                        <div className="flex w-full justify-center">
                            {/* <PdfOpenModal/> */}
                        </div>
                        <div className="w-full flex justify-center px-2 md:px-10">
                            <h1 className="text-white text-center text-3xl lg:text-6xl font-bold font-midnight font-normal">
                                Feria Internacional de Camelidos Cusco 2024
                            </h1>
                        </div>
                        {/* <div className="w-full flex justify-center"> */}
                            {/* <Link href="/login">
                                <Button
                                    size={"xs"}
                                    className="bg-primary border-4 border-white rounded-full enabled:hover:bg-white enabled:hover:border-primary group pt-0 px-6"
                                >
                                    <div className="flex gap-4 items-center">
                                        {<span className="text-white text-2xl lg:text-4xl font-bold group-hover:text-primary">
                                            Compra tu stand
                                        </span>}
                                        <span>
                                            <FaStore className="h-8 w-8 group-hover:text-primary" />
                                        </span>
                                    </div>
                                </Button>
                            </Link> */}
                        {/* </div> */}
                        {/* <div className="w-full px-2">
                            <DynamicCountDown />
                        </div> */}
                    </div>
                </div>
                {/* Content */}
            </div>
        </div>
        <CarouselMain/>
        <ContentIndex2/> 
        </>
  )
}
export default Home