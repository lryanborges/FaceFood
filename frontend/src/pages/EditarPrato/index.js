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
  const [modoDePreparo, setModoDePreparo] = useState();
  const [tempoDePreparo, setTempoDePreparo] = useState();
  const [imgUrl, setImgUrl] = useState();
  const [user, setUser] = useState({});
  const [uuid, setUuid] = useState();
  const { pratoId } = useParams();
  const navigate = useNavigate();

  const type = [
    { value: "vegana", label: "Vegana" },
    { value: "sem-lactose", label: "Sem Lactose" },
    { value: "vegetariana", label: "Vegetariana" },
    { value: "japonesa", label: "Japonesa" },
    { value: "chinesa", label: "Chinesa" },
    { value: "nordica", label: "Nórdica" },
    { value: "sem-gluten", label: "Sem Glúten" },
  ];
  const ingredient = [
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
  const handleSelectChangeTipos = (selectedOptions) => {
    const selectedValues = selectedOptions.map((option) => option.value);
    setTipos(selectedValues);
  };
  const handleSelectChangeIngredientes = (selectedOptions) => {
    const selectedValues = selectedOptions.map((option) => option.value);
    setIngredientes(selectedValues);
  };

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
          setIngredientes(
            response.data.ingredientes.map((i) => {
              return i.nome;
            })
          );
          setTempoDePreparo(response.data.tempoDePreparo);
          setModoDePreparo(response.data.modoDePreparo);
          setUser(response.data.user);
          setImgUrl(response.data.imgUrl);
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
      modoDePreparo,
      tempoDePreparo,
    };
    let ingre = [];
    api.get("/api/ingrediente").then((response) => {
      ingre = response.data.filter((ingrediente) => {
        return ingredientes.includes(ingrediente.nome);
      });
      const obj = { ...prato, ingredientes: ingre };
      console.log(ingre);
      api
        .put("/api/prato", obj)
        .then((response) => {
          if (response.data) {
            //navigate(`/`);
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

      <h2 className=" mt-8 font-bold text-cinza text-3xl ml-16">
        Editar prato
      </h2>
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
              className="bg-input border-solid border border-facefoodred rounded w-325px h-8"
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
              <label htmlFor="tipos">Tipos</label>
              <Select
                name="tipos"
                id="tipos"
                options={type}
                value={tipos.map((tipo) => {
                  return { value: `${tipo}`, label: `${tipo}` };
                })}
                onChange={handleSelectChangeTipos}
                isMulti
              />
            </div>
            <div>
              <label htmlFor="ingredientes">Ingredientes</label>
              <Select
                id="ingredientes"
                name="ingredientes"
                value={ingredientes.map((i) => {
                  return { label: `${i}`, value: `${i}` };
                })}
                options={ingredient}
                onChange={handleSelectChangeIngredientes}
                isMulti
              />
            </div>
          </div>
        </div>

        <div>
          <div className="flex gap-6">
            <label className="w-32" for="modoDePreparo">
              Modo de preparo
            </label>
            <textarea
              className="bg-input border border-solid border-facefoodred rounded"
              name="modoDePreparo"
              id="modoDePreparo"
              placeholder="Modo de preparo"
              cols="22"
              rows="6"
              value={modoDePreparo}
              onChange={(e) => setModoDePreparo(e.target.value)}
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
              htmlFor="imagem"
            ></label>
            <input name="imagem" id="imagem" type="file" hidden />
          </div>
          <div className="flex-1">
            <label className="w-32 inline-block" htmlFor="tempoDePreparo">
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
              value={tempoDePreparo}
              onChange={(e) => setTempoDePreparo(e.target.value)}
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
              name="calorias"
              id="calorias"
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
