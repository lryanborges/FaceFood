import Header from "../../components/Header";
import Footer from "../../components/Footer";
import React from "react";
import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";
import { api } from "../../services/api";
import "./style.css";

function VisualizarPrato() {
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
  return (
    <div className="flex flex-col w-full h-full font-poppins">
      <Header />
      <h1 className="text-3xl text-cinza font-bold font-poppins mt-8 px-4 ml-8 mb-4">
        Visualizar prato
      </h1>

      <div className="bg-cinza flex-1 m-8 flex flex-col px-8 py-8 gap-6">
        <div className="flex">
          <div className="flex-1 flex flex-col self-center">
            <div className="flex justify-between mb-4">
              <div className="flex flex-col flex-1">
                <p className="font-bold text-2xl mb-4">Descrição: </p>
                <p className="text-cinzaTexto font-medium text-xl">
                  {prato.descricao}
                </p>
              </div>
              <div className="flex flex-col flex-1">
                <p className="mr-8 font-bold text-2xl mb-4">Categoria: </p>
                <span className="text-cinzaTexto text-xl font-medium">
                  {prato.tipos}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <img
              className="h-48 w-auto"
              src={require("../../assets/comida1.png")}
              alt=""
            />
            <span className="font-poppins text-xl font-medium mt-2">
              {prato.nome}
            </span>
          </div>
        </div>

        <div className="flex">
          <div className="flex flex-col grow-1">
            <h2 className="font-bold text-2xl mb-4">Lista de ingredientes: </h2>
            <p className="text-cinzaTexto font-medium font-poppins text-xl">
              {}
            </p>
          </div>
          <div className="flex flex-col grow-1">
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
            Aqui é o modo de preparo
          </p>
        </div>

        <div className="flex flex-col">
          <h2 className="font-bold font-poppins text-2xl mb-4">
            Informações nutricionais:{" "}
          </h2>
          <p className="font-poppins font-medium text-xl text-cinzaTexto">
            {"calorias :" + prato.calorias}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default VisualizarPrato;
