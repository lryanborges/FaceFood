import React from "react";
import './style.css'
import { api } from "../services/api";

const RefeicaoDet = ({ nome, desc, tipo }) => {

    return (
        <div class="grid-2 mt-2" >
            <div>
                <h3 class="font-bold c-3D3D3D mt-2 w-64">{nome}</h3>
                <p class="font-medium c-3D3D3D text-0v5xl w-64">{desc}</p>
                <div class="ml-12 mt-1 text-0v3xl flex gap-2 c-001701">
                    {tipo.map((tipos, index) => (
                        <p class="bg-facefoodgreen px-3 rounded-full">{tipos}</p>
                    ))}
                </div>
            </div>
            <img class="ml-2 mt-2 rounded" src={require("../assets/comida1.png")} width="120rem" />
        </div>
    )
}

export default RefeicaoDet;