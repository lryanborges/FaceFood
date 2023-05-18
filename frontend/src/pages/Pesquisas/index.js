import React, { useState, useEffect } from "react";
import './style.css';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import homemComendoSvg from "../../assets/Eating healthy food-cuate 1.svg"
import PratoPesquisa from "../../components/PratoPesquisa";
import { api } from "../../services/api";

const Pesquisas = () => {

    const [pratos, setPratos] = useState([]);
    const [pesquisa, setPesquisa] = useState("");

    useEffect(() => {
        fetchPratos();
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

    return (
        <div className='bg-brancoamarelado'>
            <Header />

            <main class="p-8">
                <div>
                    <h1 class="text-3xl font-bold c-3D3D3D">Opções</h1>
                    <h2 class="text-3xl font-light c-FF0038 ml-4">Saudáveis</h2>
                </div>
                <div class="grid-2">
                    <img class="ml-16 mt-8" src={homemComendoSvg} width="65%" />
                    <div>
                        <div class="flex mt--8 mb-4">
                            <input class="bg-brancoamarelado border-2 border-facefoodred rounded p-1 w-full h-10" type="text" placeholder="  Pesquise aqui!" 
                            onChange={handlePesquisaChange}
                            />
                            <button type="submit" class="bg-facefoodred p-1 px-4 rounded ml--4">
                                <svg width="28" height="28" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M36.7499 36.7499L27.6552 27.6552M27.6552 27.6552C30.1167 25.1936 31.4995 21.8551 31.4995 18.374C31.4995
                 14.8929 30.1167 11.5544 27.6552 9.0929C25.1936 6.6314 21.8551 5.24854 18.374 5.24854C14.8929 5.24854 11.5544 
                 6.6314 9.0929 9.0929C6.6314 11.5544 5.24854 14.8929 5.24854 18.374C5.24854 21.8551 6.6314 25.1936 9.0929 
                 27.6552C11.5544 30.1167 14.8929 31.4995 18.374 31.4995C21.8551 31.4995 25.1936 30.1167 27.6552 27.6552Z"
                                        stroke="#F1F9E4" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>

                        <div class="bg-F0F0F0 p-8 rounded relative scroll-7">
                            {filteredPratos.map((prato, index) => (
                                <div key={prato.id} className={index === 0 ? "bg-yellow-200" : ""}>
                                    <PratoPesquisa nome={prato.nome} desc={prato.descricao} tipo={prato.tipos} />
                                    <span class="mt-2 bg-FFB1C2 h-0v5 w-semifull absolute rounded"></span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <div class="mt-8">
                <Footer />
            </div>

        </div >
    )
}

export default Pesquisas;