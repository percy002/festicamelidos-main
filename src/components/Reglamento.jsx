import reglamento from "../assets/docs/reglamento.pdf"
const Reglamento = () => {
  return (
    <div className="px-10 h-screen relative py-5 bg-concrete-50">
      <div className="mt-12 absolute w-full h-5/6">
        <iframe src={reglamento} frameborder="0" className="border-0 w-4/5 h-full mx-auto "></iframe>
      </div>
    </div>
  );
};
export default Reglamento;
