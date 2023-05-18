import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Select from "react-select";
import React from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Pesquisa from "../../components/Pesquisa";
import PratoSemBG from "../../components/PratoSemBG";
import "./style.css";

function CadastrarPrato() {
  const [prato, setPrato] = useState({
    nome: "",
    calorias: 0,
    descricao: "",
    tipos: [],
    ingredientes: [],
    imgUrl: "existe",
    user: {},
    modoDePreparo: "",
    tempoDePreparo: 0,
  });
  const navigate = useNavigate();
  //const { option, setOption } = useState([{ label: "", value: "" }]);
  /*useEffect(() => {
    async function loadData() {
      api.get("/api/ingrediente").then((response) => {
        setOption(response.data);
        console.log(response.data);
      });
    }
    loadData();
  }, []);*/

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPrato((prevPrato) => ({ ...prevPrato, [name]: value }));
  };
  const handleSelectChangeTipos = (selectedOptions) => {
    const selectedValues = selectedOptions.map((option) => option.value);
    setPrato((prevPrato) => ({ ...prevPrato, tipos: selectedValues }));
  };
  const handleSelectChangeIngredientes = (selectedOptions) => {
    const selectedValues = selectedOptions.map((option) => option.value);
    setPrato((prevPrato) => ({
      ...prevPrato,
      ingredientes: selectedValues,
    }));
  };
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
    { value: "Peixes", label: "Peixes" },
    { value: "Carnes", label: "Carnes" },
    { value: "Frutos do Mar", label: "Frutos do Mar" },
    { value: "Vegetais", label: "Vegetais" },
    { value: "Grãos", label: "Grãos" },
    { value: "Cereais", label: "Cereais" },
    { value: "Frutas", label: "Frutas" },
    { value: "Laticínios", label: "Laticínios" },
    { value: "Temperos", label: "Temperos" },
    { value: "Ervas", label: "Ervas" },
    { value: "Óleos e Gorduras", label: "Óleos e Gorduras" },
    { value: "Nozes e Sementes", label: "Nozes e Sementes" },
    { value: "Massas", label: "Massas" },
    { value: "Doces e Sobremesas", label: "Doces e Sobremesas" },
    { value: "Bebidas", label: "Bebidas" },
  ];

  async function handleSubmit(e) {
    e.preventDefault();
    prato.user = { id: `${localStorage.getItem("id")}` };
    console.log(localStorage.getItem("id"));
    let ingre = [];
    api.get("/api/ingrediente").then((response) => {
      ingre = response.data.filter((ingrediente) => {
        return prato.ingredientes.includes(ingrediente.nome);
      });
      const obj = { ...prato, ingredientes: ingre };
      console.log(obj);
      api
        .post("/api/prato", obj)
        .then((response) => {
          if (response.data) {
            navigate(`/`);
          } else {
            alert("Dados errados");
          }
        })
        .catch((error) => {
          alert("Dados errados transmissao");
        });
    });
  }
  return (
    <div className="flex flex-col w-full h-full">
      <Header />

      <h2 className="mt-8 font-bold text-cinza text-3xl ml-16">
        Cadastrar pratos
      </h2>
      <form
        className="flex flex-col bg-cinza flex-1 m-8 p-12 gap-6"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-between">
          <div className="flex-1 flex gap-6">
            <label className="w-32" htmlFor="nome">
              Nome do prato{" "}
            </label>
            <input
              className="bg-input border-solid border border-facefoodred rounded w-325px h-8"
              type="text"
              placeholder="Nome do prato"
              name="nome"
              id="nome"
              value={prato.nome}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="flex justify-between flex-1">
            <div>
              <label htmlFor="tipos">Tipos</label>
              <Select
                name="tipos"
                id="tipos"
                value={prato.tipos.map((tipo) => {
                  return { value: `${tipo}`, label: `${tipo}` };
                })}
                onChange={handleSelectChangeTipos}
                options={tipos}
                isMulti
              />
            </div>
            <div>
              <label htmlFor="ingredientes">Ingredientes</label>
              <Select
                id="ingredientes"
                name="ingredientes"
                onChange={handleSelectChangeIngredientes}
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
              name="modoDePreparo"
              id="modoDePreparo"
              placeholder="Modo de preparo"
              cols="22"
              value={prato.modoDePreparo}
              onChange={handleInputChange}
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
            <input name="imagem" id="imagem" type="file" hidden />
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
              name="tempoDePreparo"
              id="tempoDePreparo"
              value={prato.tempoDePreparo}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="flex">
          <div className="flex flex-1 gap-6">
            <label className="w-32" for="calorias">
              Informações nutricionais
            </label>
            <textarea
              className="bg-input border border-solid border-facefoodred rounded"
              name="calorias"
              id="calorias"
              value={prato.calorias}
              onChange={handleInputChange}
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
              value={prato.descricao}
              onChange={handleInputChange}
              placeholder="Descrição"
              cols="22"
              rows="6"
              required
            ></textarea>
          </div>
        </div>

        <button
          className="bg-facefoodred w-32 p-2 rounded self-center text-white"
          type="submit"
        >
          Salvar prato
        </button>
      </form>

      <Footer />
    </div>
  );
}
export default CadastrarPrato;
