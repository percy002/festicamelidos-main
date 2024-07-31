import reglamento from "../assets/docs/reglamento.pdf";
import { useScrollTop } from "../hooks/useScrollTop";
import Header from "./UI/Header";
const Reglamento = () => {
  useScrollTop();
  return (
    <>
      <Header titleHeader={"REGLAMENTO"} contentHeader={"Descarga nuestro programa"} />
      <div className="h-screen relative pt-4 bg-concrete-50">
        <div className="my-12 absolute w-full h-[85vh] ">
          <iframe
            src={reglamento}
            className="border-0 w-4/5 h-full mx-auto "
          ></iframe>
        </div>
      </div>
    </>
  );
};
export default Reglamento;
