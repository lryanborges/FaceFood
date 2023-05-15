import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./style.css";

function VisualizarPrato() {
  return (
    <div className="flex flex-col w-full h-full font-poppins">
      <Header />
      <h1 className="text-3xl text-[#50d71e] font-bold font-poppins mt-8 px-4 ml-8 mb-4">
        Visualizar prato
      </h1>

      <div className="bg-[#EDEDED] flex-1 m-8 flex flex-col px-8 py-8 gap-6">
        <div className="flex">
          <div className="flex-1 flex flex-col self-center">
            <div className="flex justify-between mb-4">
              <p className="font-bold text-2xl">Descrição: </p>
              <p className="mr-8 font-bold text-2xl">
                Categoria:
                <span className="text-cinzaTexto text-xl font-medium">
                  {" "}
                  Não selecionado!
                </span>
              </p>
            </div>
            <p className="text-cinzaTexto font-medium text-xl">
              Um frango supimpa é um frango incrivelmente delicioso e saboroso.
              Ele é preparado com ingredientes de alta qualidade e tem uma
              textura suave e macia. O sabor é equilibrado e pode incluir
              especiarias, ervas e outros temperos para um gosto ainda mais
              incrível. É uma ótima opção para uma refeição satisfatória e
              saudável.
            </p>
          </div>
          <div className="flex flex-col">
            <img src="../../assets/comida1.png" class="h-48 w-auto" />
            <span className="font-poppins text-xl font-medium mt-2">
              Frango com batatas e ovos
            </span>
          </div>
        </div>

        <div className="flex gap-18">
          <div className="flex flex-col">
            <h2 className="font-bold text-2xl mb-4">Lista de ingredientes: </h2>
            <p className="text-cinzaTexto font-medium font-poppins text-xl">
              Frango, tomate, cebola, alho, pimenta-do-reino, sal gordura de
              porco e açafrão
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold text-2xl mb-4 min-w-ajuste">
              Tempo de preparo:{" "}
            </h2>
            <span className="font-poppins font-medium text-xl text-cinzaTexto">
              120 minutos
            </span>
          </div>
        </div>

        <div className="flex flex-col">
          <h2 className="font-bold font-poppins text-2xl mb-4">
            Modo de preparo:{" "}
          </h2>
          <p className="font-poppins font-medium text-xl text-cinzaTexto">
            Primeiro corte os tomates em brunoise, pique a cebola e pile os
            dentes de alho, Depois, basta colocar o frango cortado em uma
            vasilha e colocar todos os ingrediente juntos, Coloque uma panela de
            pressão ou se preferir, uma panela normal no fogo ...
          </p>
        </div>

        <div className="flex flex-col">
          <h2 className="font-bold font-poppins text-2xl mb-4">
            Informações nutricionais:{" "}
          </h2>
          <p className="font-poppins font-medium text-xl text-cinzaTexto">
            Nenhuma informação nutricional foi adicionanda ao prato
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default VisualizarPrato;
