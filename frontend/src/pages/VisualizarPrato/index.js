import Header from "../../components/Header";
import Footer from "../../components/Footer";
import React from "react";
import { useParams } from "react-router-dom";
import Select from "react-select";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import "./style.css";

function VisualizarPrato() {
  const [prato, setPrato] = useState({
    nome: "",
    calorias: 0,
    descricao: "",
    tipos: [],
    ingredientes: [],
    imgUrl: "",
    user: {},
    modoDePreparo: "",
    tempoDePreparo: 0,
  });
  const { pratoId } = useParams();
  useEffect(() => {
    async function loadData() {
      api
        .get(`/api/prato/id/${pratoId}`)
        .then((response) => {
          setPrato(response.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
    loadData();
  }, [pratoId]);
  return (
    <div className="flex flex-col w-full h-full">
      <Header />

      <h2 className="font-bold text-cinza text-3xl ml-16 mt-8">
        Visualizar prato
      </h2>
      <form className="flex flex-col bg-cinza flex-1 m-8 p-12 gap-6">
        <div className="flex justify-between">
          <div className="flex-1 flex gap-6">
            <label className="w-32" for="nome">
              Nome do prato{" "}
            </label>
            <input
              className="bg-input border-solid border border-facefoodred rounded w-325px h-8"
              type="text"
              placeholder="Nome do prato"
              value={prato.nome}
              name="nome-prato"
              id="nome-prato"
              readOnly
            />
          </div>
          <div className="flex justify-between flex-1">
            <div>
              <label htmlFor="tipo-de-comida">Tipos</label>
              <Select
                name="tipo-de-comida"
                id="tipo-de-comida"
                value={prato.tipos.map((tipo) => {
                  return {
                    label: `${tipo}`,
                    value: `${tipo}`,
                  };
                })}
                readOnly
                isMulti
              />
            </div>
            <div>
              <label htmlFor="ingredientes">Ingredientes</label>
              <Select
                id="ingredientes"
                name="ingredientes"
                readOnly
                value={prato.ingredientes.map((ingrediente) => {
                  return {
                    label: `${ingrediente.nome}`,
                    value: `${ingrediente.nome}`,
                  };
                })}
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
              value={prato.modoDePreparo}
              readOnly
            ></textarea>
          </div>
        </div>

        <div className="flex">
          <div className="flex flex-1 gap-6">
            <span className="w-32" htmlFor="imagem">
              Imagem
            </span>
            <img
              src={require("../../assets/comida1.png")}
              alt="Imagem"
              className="border border-solid border-facefoodred rounded w-325px h-146px"
            />
          </div>
          <div className="flex-1">
            <label className="w-32 inline-block" htmlFor="tempo-de-preparo">
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
              value={prato.tempoDePreparo}
              readOnly
            />
          </div>
        </div>

        <div className="flex">
          <div className="flex flex-1 gap-6">
            <label className="w-32" htmlFor="nutri-info">
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
              readOnly
            ></textarea>
          </div>
          <div className="flex-1 flex">
            <label className="w-32" htmlFor="descricao">
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
              readOnly
            ></textarea>
          </div>
        </div>
      </form>

      <Footer />
    </div>
  );
}
export default VisualizarPrato;
