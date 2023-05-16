import React from "react";
import './style.css';

const PratoPesquisa = () => {
    return (
        <div class="grid-2">
            <div>
                <h3 class="textatt-2xl font-bold c-3D3D3D mt-2 w-96">Frango com batatas e ovos</h3>
                <p class="font-medium c-3D3D3D mt-2">acompanha arroz, feijão e uma ótima salada de
                    vegetais.
                </p>
                <div class="ml-16 mt-1 text-0v5xl flex gap-2 c-001701">
                    <p class="bg-facefoodgreen px-4 rounded-full">tradicional</p>
                    <p class="bg-facefoodgreen px-4 rounded-full">refeições</p>
                    <p class="bg-facefoodgreen px-4 rounded-full">saudável</p>
                </div>
            </div>
            <img class="ml-4 mt-2 rounded" src={require("../assets/comida1.png")} width="180rem" />
        </div>
    )
}

export default PratoPesquisa;