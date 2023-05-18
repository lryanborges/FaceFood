import React from "react";
import './style.css';

const PratoPesquisa = ({nome, desc, tipo}) => {
    return (
        <div class="grid-2 mt-4">
            <div>
                <h3 class="textatt-2xl font-bold c-3D3D3D mt-2 w-96">{nome}</h3>
                <p class="font-medium c-3D3D3D mt-2">{desc}</p>
                <div class="ml-16 mt-1 text-0v5xl flex gap-2 c-001701">
                {tipo.map((tipos, index) => (
                    <p class="bg-facefoodgreen px-4 rounded-full">{tipos}</p>
                ))}
                </div>
            </div>
            <img class="ml-4 mt-2 rounded" src={require("../assets/comida1.png")} width="180rem" />
        </div>
    )
}

export default PratoPesquisa;