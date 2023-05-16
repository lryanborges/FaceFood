import React from "react";
import "./style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Prato from "../../components/Prato";

const Pratos = () => {
    return (
        <div>
            <Header />


            <section class="flex items-center justify-between">
                <div class="ml-8 mt-8">
                    <h1 class="text-3xl font-bold c-3D3D3D">Seus</h1>
                    <h2 class="text-3xl font-light c-FF0038 ml-8">Pratos</h2>
                </div>
                <div class="relative ml-4 mr-5 mt-5">
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

            <div class="mt-8 mx-16 grid grid-cols-8 gap-4 bg-white justify-items-center">
                <Prato />
                <Prato />
                <Prato />
                <Prato />
                <Prato />
                <Prato />
                <Prato />
                <Prato />
                <Prato />
                <Prato />
                <Prato />
            </div>

            <div class="mt-8 mx-16">
                <a href="../dist/detalhar-perfil.html"
                    class="bg-red hover:bg-red-600 text-white font-bold py-2 px-4 rounded mb-5 ml-5">
                    Voltar </a>
                <a onclick="openPopup()" class="bg-red hover:bg-red-600 text-white font-bold py-2 px-4 rounded mb-5 ml-5">
                    + Adicionar Prato
                </a>
            </div>

            <div class="mt-8">
                <Footer />
            </div>

            <div id="popup" class="fixed inset-0 w-full h-full bg-gray-500 bg-opacity-50 hidden">
                <div class="w-full max-w-md mx-auto mt-20">
                    <div class="bg-white rounded shadow-lg p-4">
                        <div class="mb-4">
                            <label class="block text-gray-700 font-bold mb-2" for="nome">
                                Nome:
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="nome" type="text" placeholder="Digite o nome do prato" />
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 font-bold mb-2" for="tipo">
                                Categoria:
                            </label>
                            <select
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="tipo">
                                <option value="Vegana">Vegana</option>
                                <option value="Sem Lactose">Sem Lactose</option>
                                <option value="Vegetarianar">Vegetariana</option>
                                <option value="Japonesa">Japonesa</option>
                                <option value="Chinesa">Chinesa</option>
                                <option value="Nórdica">Nórdica</option>
                                <option value="Sem Glúten">Sem Glúten</option>
                            </select>
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 font-bold mb-2" for="calorias">
                                Modo de preparo:
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="preparo" type="text" placeholder="Digite o modo de preparo" />
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 font-bold mb-2" for="calorias">
                                Imagem:
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="imagem" type="file" placeholder="Carregar Imagem" />
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 font-bold mb-2" for="calorias">
                                Tempo de preparo:
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="imagem" type="number" placeholder="Digite o tempo de preparo" />
                        </div>
                        <div class="flex items-center justify-between">
                            <button class="bg-red text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                onclick="closePopup()">
                                + Adicionar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pratos;