import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Select from "react-select";
import React from "react";
import Pesquisa from "../../components/Pesquisa";
import PratoSemBG from "../../components/PratoSemBG";
import "./style.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";

function EditarPrato() {
  const [prato, setPrato] = useState({});
  const { pratoId } = useParams();

  useEffect(() => {
    async function loadData() {
      api
        .get(`/api/prato/id/${pratoId}`)
        .then((response) => {
          // Handle response
          setPrato(response.data);
        })
        .catch((err) => {
          // Handle errors
          console.error(err);
        });
    }
    loadData();
  }, [pratoId]);

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
  return (
    <div className="flex flex-col w-full h-full">
      <Header />

      <div className="flex justify-between mt-8">
        <h2 className="ml-16 text-cinza font-bold text-3xl">Seus pratos</h2>
        <div className=" pl-2 mr-28">
          <Pesquisa />
        </div>
      </div>

      <div>
        <div className="flex justify-center gap-8 mx-16 my-12">
          <PratoSemBG />
          <PratoSemBG />
          <PratoSemBG />
        </div>
      </div>

      <h2 className="font-bold text-cinza text-3xl ml-16">Editar prato</h2>
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
              value={prato.nome}
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
              value={""}
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
              value={""}
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
              value={prato.calorias}
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
              value={prato.descricao}
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
export default EditarPrato;
