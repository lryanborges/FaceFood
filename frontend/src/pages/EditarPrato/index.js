import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Select from "react-select";
import React from "react";
import Pesquisa from "../../components/Pesquisa";
import PratoSemBG from "../../components/PratoSemBG";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";

function EditarPrato() {
  const [nome, setNome] = useState();
  const [descricao, setDescricao] = useState();
  const [calorias, setCalorias] = useState();
  const [tipos, setTipos] = useState([]);
  const [ingredientes, setIngredientes] = useState([]);
  const [modo, setModo] = useState();
  const [tempo, setTempo] = useState();
  const [imgUrl, setImgUrl] = useState();
  const [user, setUser] = useState({});
  const [uuid, setUuid] = useState();
  const { pratoId } = useParams();
  const navigate = useNavigate();
  const tipo = [];
  const ingrediente = [];
  useEffect(() => {
    async function loadData() {
      api
        .get(`/api/prato/id/${pratoId}`)
        .then((response) => {
          // Handle response
          setNome(response.data.nome);
          setDescricao(response.data.descricao);
          setCalorias(response.data.calorias);
          setTipos(response.data.tipos);
          setIngredientes(response.data.ingredientes);
          setTempo(12);
          setModo("sim meu irmao");
          setUser(response.data.user);
          setImgUrl("simmmmmmmm");
          setUuid(response.data.uuid);
        })
        .catch((err) => {
          // Handle errors
          console.error(err);
        });

      /*api.get(`/api/prato`).then((response) => {
        response.data.tipos.map((tipo) => {
          return tipo.push({
            label: `${tipo}`,
            value: `${tipo}`,
          });
        });
        response.data.ingredientes.map((ingrediente) => {
          return ingrediente.push({
            label: `${ingrediente.nome}`,
            value: `${ingrediente.nome}`,
          });
        });
      });*/
    }
    loadData();
  }, [pratoId]);

  async function handleSubmit(e) {
    e.preventDefault();
    const prato = {
      nome,
      descricao,
      calorias,
      tipos,
      ingredientes,
      user,
      imgUrl,
      uuid,
    };
    console.log(prato);
    api
      .put("/api/prato", prato)
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
  }

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
      <form
        className="flex flex-col bg-cinza flex-1 m-8 p-12 gap-6"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-between">
          <div className="flex-1 flex gap-6">
            <label className="w-32" for="nome">
              Nome do prato{" "}
            </label>
            <input
              className="bg-input border-solid border border-facefoodred rounded w-325px"
              type="text"
              placeholder="Nome do prato"
              value={nome}
              name="nome-prato"
              id="nome-prato"
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-between flex-1">
            <div>
              <label htmlFor="tipo-de-comida">Tipos</label>
              <Select
                name="tipo-de-comida"
                id="tipo-de-comida"
                options={tipo}
                isMulti
              />
            </div>
            <div>
              <label htmlFor="ingredientes">Ingredientes</label>
              <Select
                id="ingredientes"
                name="ingredientes"
                options={ingrediente}
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
              value={modo}
              onChange={(e) => setModo(e.target.value)}
              required
            ></textarea>
          </div>
        </div>

        <div className="flex">
          <div className="flex flex-1 gap-6">
            <span className="w-32" htmlFor="imagem">
              Imagem
            </span>
            <label
              className="bg-input border border-solid border-facefoodred rounded w-325px h-146px cursor-pointer"
              for="imagem"
            ></label>
            <input name="imagem" id="imagem" type="file" hidden />
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
              value={tempo}
              onChange={(e) => setTempo(e.target.value)}
              required
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
              value={calorias}
              onChange={(e) => setCalorias(e.target.value)}
              required
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
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
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
export default EditarPrato;
