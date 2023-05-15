import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Select from "react-select";
import React from "react";
import "./style.css";

function CadastrarPrato() {
  const tipos = [
    { value: "vegana", label: "Vegana" },
    { value: "sem-lactose", label: "Sem Lactose" },
    { value: "vegetariana", label: "Vegetariana" },
    { value: "japonesa", label: "Japonesa" },
    { value: "chinesa", label: "Chinesa" },
    { value: "nordica", label: "Nórdica" },
    { value: "sem-gluten", label: "Sem Glúten" },
  ];
  const ingredientes = [
    { value: "ovos", label: "Ovos" },
    { value: "carne", label: "Carne" },
    { value: "leite", label: "Leite" },
    { value: "peixe", label: "Peixe" },
    { value: "massas", label: "Massas" },
    { value: "legumes", label: "Legumes" },
    { value: "frango", label: "Frango" },
    { value: "queijo", label: "Queijo" },
    { value: "verduras", label: "Verduras" },
  ];
  return (
    <div className="flex flex-col w-full h-full">
      <Header />

      <div className="flex justify-between mt-8">
        <h2 className="ml-16 text-cinza font-bold text-3xl">Seus pratos</h2>
        <div className="flex border-2 border-facefoodred rounded-full pl-2 mr-28">
          <input className="w-64" type="search" placeholder="Pesquisar" />
          <button type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-red"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15.5 15.5l5.5 5.5"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9.5a9.5 9.5 0 11-19 0 9.5 9.5 0 0119 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div>
        <div className="flex justify-center gap-8 mx-16 my-12">
          <div>
            <img
              className="rounded"
              src="../img/comida1.png"
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
          <div>
            <img
              className="rounded"
              src="../img/comida1.png"
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
          <div>
            <img
              className="rounded"
              src="../img/comida1.png"
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
        </div>
      </div>

      <h2 className="font-bold text-cinza text-3xl ml-16">Cadastrar pratos</h2>
      <form className="flex flex-col bg-cinza flex-1 m-8 p-12 gap-6">
        <div className="flex justify-between">
          <div className="flex-1 flex gap-6">
            <label className="w-32" for="nome">
              Nome do prato{" "}
            </label>
            <input
              className="bg-input border-solid border border-facefoodred rounded w-325px"
              type="text"
              placeholder="Nome do prato"
              name="nome-prato"
              id="nome-prato"
              required
            />
          </div>
          <div className="flex justify-between flex-1">
            <div>
              <label htmlFor="tipo-de-comida">Tipos</label>
              <Select
                name="tipo-de-comida"
                id="tipo-de-comida"
                options={tipos}
                isMulti
              />
            </div>
            <div>
              <label htmlFor="ingredientes">Ingredientes</label>
              <Select
                id="ingredientes"
                name="ingredientes"
                options={ingredientes}
                isMulti
              />
            </div>
          </div>
        </div>

        <div>
          <div className="flex gap-6">
            <label className="w-32" for="modo-de-preparo">
              Modo de preparo
            </label>
            <textarea
              className="bg-input border border-solid border-facefoodred rounded"
              name="modo-de-preparo"
              id="modo-de-preparo"
              placeholder="Modo de preparo"
              cols="22"
              rows="6"
              required
            ></textarea>
          </div>
        </div>

        <div className="flex">
          <div className="flex flex-1 gap-6">
            <span className="w-32" for="imagem">
              Imagem
            </span>
            <label
              className="bg-input border border-solid border-facefoodred rounded w-325px h-146px cursor-pointer"
              for="imagem"
            ></label>
            <input name="imagem" id="imagem" type="file" hidden required />
          </div>
          <div className="flex-1">
            <label className="w-32 inline-block" for="tempo-de-preparo">
              Tempo de preparo
            </label>
            <input
              className="ml-8 bg-input border border-solid border-facefoodred rounded w-64"
              type="number"
              min="1"
              max="600"
              placeholder="Tempo de preparo(Minutos)"
              name="tempo-de-preparo"
              id="tempo-de-preparo"
              required
            />
          </div>
        </div>

        <div className="flex">
          <div className="flex flex-1 gap-6">
            <label className="w-32" for="nutri-info">
              Informações nutricionais
            </label>
            <textarea
              className="bg-input border border-solid border-facefoodred rounded"
              name="nutri-info"
              id="nutri-info"
              placeholder="Informações nutricionais"
              cols="22"
              rows="6"
              required
            ></textarea>
          </div>
          <div className="flex-1 flex">
            <label className="w-32" for="descricao">
              Descrição
            </label>
            <textarea
              className=" ml-8 bg-input border border-solid border-facefoodred rounded"
              name="descricao"
              id="descricao"
              placeholder="Descrição"
              cols="22"
              rows="6"
              required
            ></textarea>
          </div>
        </div>

        <button
          className="bg-facefoodred w-32 p-2 rounded self-center text-white"
          onclick="salvarPrato()"
        >
          Salvar prato
        </button>
      </form>

      <Footer />
    </div>
  );
}
export default CadastrarPrato;
