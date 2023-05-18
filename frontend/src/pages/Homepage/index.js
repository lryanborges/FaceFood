import React, { useEffect, useState } from 'react';
import './style.css';
import Opcoes from '../../components/Opcoes'
import Header from '../../components/Header'
import Prato from '../../components/Prato'
import Publicacao from '../../components/Publicacao'
import Footer from '../../components/Footer'
import { api } from '../../services/api';

const Homepage = () => {

    const [pratos, setPratos] = useState([]);

    useEffect(() => {
        fetchPratos();
    }, []);

    const fetchPratos = async () => {
        const response = await api.get("/api/prato");
        console.log(response.data);
        setPratos(response.data);
    };

    const filteredPratos = pratos.filter(
        (prato) =>
            prato.nome.toLowerCase() ||
            prato.desc.toLowerCase()
    );

    return (
        <div class="bg-brancoamarelado">

            <Header />

            <div class="bg-facefoodgreen bg-opacity-40 flex">
                <div class="w-1/2 flex flex-col justify-center items-center">
                    <h1 class="text-4xl font-bold text-center">Alimente-se de forma<br /><span class="c-B7004B">balanceada</span> e saudável.</h1>
                    <p class="c-C68484 font-light text-1v5xl mt-4 mb-8 ">Monte já sua rotina</p>
                    <a href="planejamento" class="bg-red-500 text-white px-4 py-2 rounded bg-red">Planejar</a>
                </div>
                <div class="flex-1 mr-1">
                    <img src={require("../../assets/Eating healthy food-bro 3.png")} alt="Imagem ilustrativa" />
                </div>
            </div>

            <div class="mx-32 my-12">
                <Opcoes />
            </div>

            <div class="bg-facefoodgreen rounded-lg border-transparent p-4 mx-auto my-4 max-w-lg flex justify-between items-center">
                <div>
                    <h2 class="text-xl font-bold">Refeições do dia</h2>
                    <p class="text-sm">quarta-feira, 01/02/2023</p>
                </div>
                <a href="planejamento">
                    <button class="bg-red rounded-full p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M12.05 6.273L9.727 8.596l3.678 3.678 2.323-2.323a.5.5 0 0 0 0-.707l-2.322-2.322a.5.5 0 0 0-.707 0zM8.82 9.508l-2.322-2.322a1.5 1.5 0 0 1 2.121-2.12l2.322 2.322a1.5 1.5 0 0 1-2.12 2.12z" />
                            <path d="M2.5 16.5h15a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1h-5.5v-1a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v1H2.5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1z" />
                        </svg>
                    </button>
                </a>
            </div>

            <div className="mx-16 mt-8">
      <section className="flex items-center justify-between">
        <div className="text-3xl font-bold font-poppins ml-4 mt-4">Publicações</div>
        <div className="relative ml-4 mr-5">
          <input type="text" className="border-2 border-red rounded-full py-2 px-4 w-64" placeholder="Pesquisar publicação" />
          <button type="submit" className="absolute right-0 top-0 mt-2.5 mr-4">
            <svg width="25" height="25" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Código do ícone de pesquisa */}
            </svg>
          </button>
        </div>
      </section>

      <div className="mt-4 grid grid-cols-1 gap-4">
        <Publicacao />
        <Publicacao />
        <Publicacao />
      </div>

      <a href="/publicacoes" className="bg-red hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4">
        Visualizar Suas Publicações
      </a>
    </div>

            <div class="mx-16 mt-8">
                <section class="flex items-center justify-between">
                    <div class="text-3xl font-bold font-poppins ml-4 mt-4">Seus Pratos</div>
                    <div class="relative ml-4 mr-5">
                        <input type="text" class="border-2 border-red rounded-full py-2 px-4 w-64" placeholder="Pesquisar pratos" />
                        <button type="submit" class="absolute right-0 top-0 mt-2v5 mr-4">
                            <svg width="25" height="25" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M35.5014 35.5014L26.4066 26.4066M26.4066 26.4066C28.8681 23.9451 30.251 20.6066 30.251 
            17.1255C30.251 13.6444 28.8681 10.3059 26.4066 7.84437C23.9451 5.38286 20.6066 4 17.1255 4C13.6444 4 
            10.3059 5.38286 7.84437 7.84437C5.38286 10.3059 4 13.6444 4 17.1255C4 20.6066 5.38286 23.9451 7.84437 
            26.4066C10.3059 28.8681 13.6444 30.251 17.1255 30.251C20.6066 30.251 23.9451 28.8681 26.4066 26.4066Z"
                                    stroke="#FF0038" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </section>

                <div class="mt-4 grid grid-cols-8 gap-4">
                    {pratos.map((prato, index) => (
                        <Prato nome={prato.nome} desc={""} autor={prato.user.email} />
                    ))};
                </div>
                <a href="/pratos" class="bg-red hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Visualizar Seus Pratos
                </a>
            </div>

            <div class="bg-facefoodgreen w-semifull rounded h-0v5 mx-16 mt-8"></div>

            <div class="mx-16 mt-8">
                <section class="flex items-center justify-between">
                    <div class="text-3xl font-bold font-poppins ml-4 mt-4">Pratos Populares</div>
                    <div class="relative ml-4 mr-5">
                        <input type="text" class="border-2 border-red rounded-full py-2 px-4 w-64" placeholder="Pesquisar pratos" />
                        <button type="submit" class="absolute right-0 top-0 mt-2v5 mr-4">
                            <svg width="25" height="25" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M35.5014 35.5014L26.4066 26.4066M26.4066 26.4066C28.8681 23.9451 30.251 20.6066 30.251 
            17.1255C30.251 13.6444 28.8681 10.3059 26.4066 7.84437C23.9451 5.38286 20.6066 4 17.1255 4C13.6444 4 
            10.3059 5.38286 7.84437 7.84437C5.38286 10.3059 4 13.6444 4 17.1255C4 20.6066 5.38286 23.9451 7.84437 
            26.4066C10.3059 28.8681 13.6444 30.251 17.1255 30.251C20.6066 30.251 23.9451 28.8681 26.4066 26.4066Z"
                                    stroke="#FF0038" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </section>

                <div class="mt-4 grid grid-cols-8 gap-4">
                    {pratos.map((prato, index) => (
                        <Prato nome={prato.nome} desc={""} autor={prato.user.email} />
                    ))}
                </div>


                <a href="../dist/visualizarPrato.html" class="bg-red hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-5">
                    Visualizar Pratos Populares
                </a>

            </div>
            <div class="mt-8">
                <Footer />
            </div>
        </div >
    )
}

export default Homepage;