import "./style.css";
function PratoSemBG() {
  return (
    <div>
      <img
        className="rounded"
        src={require("../assets/comida1.png")}
        alt="Foto de frango com batatas e ovos."
        width="240px"
      />
      <div className="mt-4">
        <h5 className="font-bold text-cinzaTexto text-1v3xl ml-1">
          Frango com batatas e ovos
        </h5>
        <p className="float-right font-light text-cinzaTexto text-0v5xl">
          por JoãoSales123
        </p>
      </div>
    </div>
  );
}
export default PratoSemBG;
