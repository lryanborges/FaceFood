import React from 'react';
import './style.css';

import asianFoodSvg from "../assets/asianfood.svg";

const Opcoes = () => {
    return (
        <section class="flex justify-between">
            <a href="pesquisas.html">
                <button class="bg-DDE3CD p-4 mt-4 rounded flex flex-col items-center w-30 h-30">
                    <img class="block" src={require("../assets/reifeçõesfood.png")} width="64px" />
                    <p class="mt-1 c-2F2F2F font-light text-1v5xl">refeições</p>
                </button>
            </a>
            <a href="pesquisas.html">
                <button class="bg-DDE3CD p-4 mt-4 rounded flex flex-col items-center w-30 h-30">
                    <img class="mt--2 block" src={require("../assets/healtyfood.png")} width="64px" />
                    <p class="c-2F2F2F font-light text-1v5xl">comida<br />saudável</p>
                </button>
            </a>
            <a href="pesquisas.html">
                <button class="bg-DDE3CD p-4 mt-4 rounded flex flex-col items-center w-30 h-30">
                    <img class="block" src={require("../assets/veganfood.png")} width="64px" />
                    <p class="mt-1 c-2F2F2F font-light text-1v5xl">vegana</p>
                </button>
            </a>
            <a href="pesquisas.html">
                <button class="bg-DDE3CD p-4 mt-4 rounded flex flex-col items-center w-30 h-30">
                    <img class="block" src={asianFoodSvg} width="64px" />
                    <p class="mt-1 c-2F2F2F font-light text-1v5xl">asiática</p>
                </button>
            </a>
            <a href="pesquisas.html">
                <button class="bg-DDE3CD p-4 mt-4 rounded flex flex-col items-center w-30 h-30">
                    <img class="block" src={require("../assets/massasfood.png")} width="64px" />
                    <p class="c-2F2F2F font-light text-1v5xl">massas</p>
                </button>
            </a>
            <a href="pesquisas.html">
                <button class="bg-DDE3CD p-4 mt-4 rounded flex flex-col items-center w-30 h-30">
                    <img class="block" src={require("../assets/fasdfood.png")} width="64px" />
                    <p class="mt-1 c-2F2F2F font-light text-1v5xl">fastfood</p>
                </button>
            </a>
            <a href="pesquisas.html">
                <button class="bg-DDE3CD p-4 mt-4 rounded flex flex-col items-center w-30 h-30">
                    <img class="mt--2 block" src={require("../assets/sucos.png")} width="64px" />
                    <p class="c-2F2F2F font-light text-1v5xl">sucos e<br />vitaminas</p>
                </button>
            </a>
        </section>
    );
}

export default Opcoes;