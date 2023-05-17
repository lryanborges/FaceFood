import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./style.css";
import { api } from "../../services/api";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Ingredientes() {
  const [ingredientes, setIngredientes] = useState([]);
  const [pesquisa, setPesquisa] = useState("");
  const { token } = localStorage.getItem("token");

  useEffect(() => {
    fetchIngredientes();
  }, []);

  const fetchIngredientes = async () => {
    try {
      const response = await api.get("/api/ingrediente");
      console.log(response.data);
      setIngredientes(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePesquisaChange = (event) => {
    setPesquisa(event.target.value);
  };

  const handleExcluir = async (id) => {
    try {
      await api.delete(`/api/ingrediente/id/${id}`);
      fetchIngredientes();
    } catch (error) {
      console.log(error);
    }
  };

  const filteredIngredientes = ingredientes.filter(
    (ingrediente) =>
      ingrediente.nome.toLowerCase().includes(pesquisa.toLowerCase()) ||
      ingrediente.tipo.toLowerCase().includes(pesquisa.toLowerCase())
  );

  const handleAdicionar = async () => {
    try {
      const nome = document.getElementById("nome").value;
      const tipo = document.getElementById("tipo").value;
      const calorias = document.getElementById("calorias").value;
      console.log(nome, tipo, calorias); // Verifique se os valores estão sendo obtidos corretamente

      const novoIngrediente = {
        nome: nome,
        tipo: tipo,
        calorias: calorias,
      };

      const response = await api.post("/api/ingrediente", novoIngrediente);

      // Atualiza a lista de ingredientes após adicionar o novo ingrediente
      fetchIngredientes();
      closePopup();
    } catch (error) {
      console.log(error);
    }
  };

  const TipoIngrediente = [
    "Carnes",
    "Peixes",
    "Frutos_do_Mar",
    "Vegetais",
    "Grãos",
    "Cereais",
    "Frutas",
    "Laticínios",
    "Temperos",
    "Ervas",
    "Óleos_e_Gorduras",
    "Nozes_e_Sementes",
    "Massas",
    "Doces_e_Sobremesas",
    "Bebidas",
  ].map((tipo) => tipo.toUpperCase());

  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Header />

      <div className="flex items-center mb-4">
        <div className="ml-8 mt-8">
          <h1 className="text-3xl font-bold c-3D3D3D">Ingredientes</h1>
          <h2 className="text-3xl font-light c-FF0038 ml-16">Cadastrados</h2>
        </div>
        <div className="relative ml-auto mr-7">
          <input
            type="text"
            className="border-2 border-red rounded-full py-2 px-4 w-64"
            placeholder="Pesquisar ingrediente"
            value={pesquisa}
            onChange={handlePesquisaChange}
          />
          <button type="submit" className="absolute right-0 top-0 mt-2v5 mr-4">
            <svg
              width="25"
              height="25"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.5014 35.5014L26.4066 26.4066M26.4066 26.4066C28.8681 23.9451 30.251 20.6066 30.251 17.1255C30.251 13.6444 28.8681 10.3059 26.4066 7.84437C23.9451 5.38286 20.6066 4 17.1255 4C13.6444 4 10.3059 5.38286 7.84437 7.84437C5.38286 10.3059 4 13.6444 4 17.1255C4 20.6066 5.38286 23.9451 7.84437 26.4066C10.3059 28.8681 13.6444 30.251 17.1255 30.251C20.6066 30.251 23.9451 28.8681 26.4066 26.4066Z"
                stroke="#FF0038"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <table className="table-auto mx-32 w-80p mb-10">
        <thead>
          <tr>
            <th className="px-6 py-2">Nome</th>
            <th className="px-6 py-2">Tipo</th>
            <th className="px-6 py-2">Calorias</th>
            <th className="px-6 py-2"></th>
          </tr>
        </thead>
        <tbody id="tb_ingredientes">
          {filteredIngredientes.map((ingrediente, index) => (
            <tr
              key={ingrediente.id}
              className={index === 0 ? "bg-yellow-200" : ""}
            >
              <td className="border">{ingrediente.nome}</td>
              <td className="border">{ingrediente.tipo}</td>
              <td className="border">{ingrediente.calorias}</td>
              <td className="border px-6 py-2">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2 btn-editar">
                  Editar
                </button>
                <button
                  className="bg-red hover:bg-red-700 text-white font-bold py-2 px-4 rounded btn-excluir"
                  onClick={() => handleExcluir(ingrediente.id)}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-5 mb-5 flex justify-center items-center">
        <a
          href="../dist/detalhar-perfil.html"
          className="bg-red hover:bg-red-600 text-white font-bold py-2 px-4 rounded mb-5 ml-5"
        >
          {" "}
          Voltar
        </a>
        <a
          className="bg-red hover:bg-red-600 text-white font-bold py-2 px-4 rounded mb-5 ml-5"
          onClick={openPopup}
        >
          {" "}
          + Adicionar Ingrediente{" "}
        </a>
      </div>

      <Footer />

      {isOpen && (
        <div
          id="popup"
          className="fixed inset-0 w-full h-full bg-gray-500 bg-opacity-50"
        >
          <div className="w-full max-w-md mx-auto mt-20">
            <div className="bg-white rounded shadow-lg p-4">
              <div className="mb-4">
                <label
                  htmlFor="nome"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Nome:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="nome"
                  type="text"
                  placeholder="Digite o nome do ingrediente"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="tipo"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Tipo:
                </label>
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="tipo"
                >
                  {TipoIngrediente.map((tipo) => (
                    <option key={tipo} value={tipo}>
                      {tipo}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="calorias"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Calorias:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="calorias"
                  type="number"
                  placeholder="Digite a quantidade de calorias"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  id="btnAdicionar"
                  className="bg-red text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={handleAdicionar}
                >
                  + Adicionar
                </button>
                <button
                  className="bg-red text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={closePopup}
                >
                  Voltar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Ingredientes;
