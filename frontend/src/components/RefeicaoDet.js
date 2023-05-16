import React from "react";
import './style.css'

const RefeicaoDet = () => {
    return (
        <div class="grid-2" >
            <div>
                <h3 class="font-bold c-3D3D3D mt-2 w-64">Frango com batatas e ovos</h3>
                <p class="font-medium c-3D3D3D mt-2 text-0v5xl w-64">acompanha arroz, feijão e
                    uma
                    ótima
                    salada de vegetais.
                </p>
                <div class="ml-12 mt-1 text-0v3xl flex gap-2 c-001701">
                    <p class="bg-facefoodgreen px-3 rounded-full">tradicional</p>
                    <p class="bg-facefoodgreen px-3 rounded-full">refeições</p>
                    <p class="bg-facefoodgreen px-3 rounded-full">saudável</p>
                </div>
            </div>
            <img class="ml-2 mt-2 rounded" src={require("../assets/comida1.png")} width="120rem" />
        </div>
    )
}

export default RefeicaoDet;