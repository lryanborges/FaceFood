import React, { useEffect, useState } from "react";
import "./style.css";
import RefeicaoDet from './RefeicaoDet';
import pinoSvg from "../assets/pino.svg";
import dobraSvg from "../assets/dobra.svg";
import { Link } from "react-router-dom";
import { api } from "../services/api";

const AddRefeicao = ({ isOpen, onClose }) => {

    const [pratos, setPratos] = useState([]);
    const [pesquisa, setPesquisa] = useState("");
    const [horario, setHorario] = useState();
    const [idUser, setIdUser] = useState();
    const [idPratos, setIdPratos] = useState([]);

    useEffect(() => {
        fetchPratos();
        setIdUser(localStorage.getItem('id'))
    }, []);

    const fetchPratos = async () => {
        const response = await api.get("/api/prato");
        console.log(response.data);
        setPratos(response.data);
    };

    const handlePesquisaChange = (event) => {
        setPesquisa(event.target.value);
    };

    const filteredPratos = pratos.filter(
        (prato) =>
            prato.nome.toLowerCase().includes(pesquisa.toLowerCase()) ||
            prato.descricao.toLowerCase().includes(pesquisa.toLowerCase())
    );

    const handleHorarioChange = (event) => {
        setHorario(event.target.value);
    }

    const handleIdPratos = (pts) => {
        setIdPratos(pts);
    }

    const refeicao = {
        pratos:[{id:idPratos}],
        user:{id:idUser},
        horario:horario,
    }

    const addRefeicao = async () => {
        console.log(refeicao);
        const response = await api.post("/api/refeicao", refeicao)
        onClose();
    }

    if (!isOpen) {
        return null;
    }

    return (
        <section class="edit bg-add-edit w-full h-full-screen fixed top-0 z-50">
            <div class="flex justify-center">
                <div class="bg-facefoodgreen relative w-192 h-128 mt-16 p-8 pt-12">
                    <img class="absolute right bottom" src={dobraSvg} />
                    <img class="items-center absolute top-middle" src={pinoSvg} width="6%" />
                    <div class="grid-2">
                        <div>
                            <h2 class="altAdd mt-4 c-001701 textatt-2xl font-bold">Adicionar refeição.</h2>
                            <div class="flex mt-8">
                                <input class="rounded p-1 w-92" type="text" placeholder="  Pesquise aqui!" 
                                onChange={handlePesquisaChange}
                                />
                                <button type="submit" class="bg-facefoodred p-1 px-4 rounded ml--4">
                                    <svg width="28" height="28" viewBox="0 0 42 42" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M36.7499 36.7499L27.6552 27.6552M27.6552 27.6552C30.1167 25.1936 31.4995 21.8551 31.4995 18.374C31.4995
                         14.8929 30.1167 11.5544 27.6552 9.0929C25.1936 6.6314 21.8551 5.24854 18.374 5.24854C14.8929 5.24854 11.5544 
                         6.6314 9.0929 9.0929C6.6314 11.5544 5.24854 14.8929 5.24854 18.374C5.24854 21.8551 6.6314 25.1936 9.0929 
                         27.6552C11.5544 30.1167 14.8929 31.4995 18.374 31.4995C21.8551 31.4995 25.1936 30.1167 27.6552 27.6552Z"
                                            stroke="#F1F9E4" stroke-width="8" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>

                            <div class="bg-FFFFFF mt-2 p-4 w-104 h-84 rounded relative scroll-7">
                                {filteredPratos.map((prato, index) => (
                                    <div key={prato.id} className={index === 0 ? "bg-yellow-200" : ""}>
                                        <RefeicaoDet id={prato.id} nome={prato.nome} desc={prato.descricao} 
                                        tipo={prato.tipos} img={prato.imgUrl} handleIdPratos={handleIdPratos}/>
                                        <span class="mt-2 bg-FFB1C2 h-0v5 w-semifull absolute rounded"></span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div class="ml-8 mt-12">
                            <h3 class="titleAdd c-001701 text-1v3xl font-bold">Selecione sua refeição preferida</h3>
                            <img class="rounded my-4" src={require("../assets/comida1.png")} width="260rem" />
                            <Link to="../pratos">
                                <p class="c-001701 underline float-right">abrir detalhes do prato</p>
                            </Link>
                            <input className="p-4 mt-2" type="time" onChange={handleHorarioChange}/>
                            <div class="flex ml-16 mr-4 justify-between mt-8">
                                <button class="bg-facefoodred c-F1F9E4 p-2 rounded"
                                    onClick={onClose}>Cancelar</button>
                                <button class="bg-facefoodred c-F1F9E4 p-2 rounded"
                                    onClick={addRefeicao}>Salvar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AddRefeicao;