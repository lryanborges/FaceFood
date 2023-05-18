import React, { useState } from "react";
import './style.css'
import { api } from "../services/api";

const RefeicaoDet = ({ id, nome, desc, tipo, handleIdPratos }) => {

    const [isSelected, setIsSelected] = useState(false);

    const handleSelection = async () => {
        if (isSelected) {
            setIsSelected(false)
            return
        } else {
            setIsSelected(true)
        }

        const response = await api.get(`/api/prato/id/${id}`)
        handleIdPratos(response.data.id);
    }

    return (
        <div className={isSelected ? "border-2 border-black rounded-50p p-1 mt-4" : "mt-2"}>
            <div onClick={handleSelection} class="grid-2 cursor-pointer">
                <div>
                    <h3 class="font-bold c-3D3D3D mt-2 w-64">{nome}</h3>
                    <p class="font-medium c-3D3D3D text-0v5xl w-64">{desc}</p>
                    <div class="ml-12 mt-1 text-0v3xl flex gap-2 c-001701">
                        {tipo.map((tipos, index) => (
                            <p class="bg-facefoodgreen px-3 rounded-full">{tipos}</p>
                        ))}
                    </div>
                </div>
                <img class="mt-2 rounded" src={require("../assets/comida1.png")} width="120rem" />
            </div>
        </div>
    )
}

export default RefeicaoDet;