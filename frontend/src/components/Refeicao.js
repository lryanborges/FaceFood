import React, { useState } from "react"
import './style.css'
import dobraSvg from "../assets/dobra.svg"
import pinoSvg from "../assets/pino.svg"

const Refeicao = ({ id, pratos, horario }) => {

    const [isSelected, setIsSelected ] = useState(false);

    const handleSelection = async () => {
        if (isSelected) {
            setIsSelected(false)
            return
        } else {
            setIsSelected(true)
        }
    }

    return (
        <div onClick={handleSelection} className={isSelected? ("border border-facefoodred bg-facefoodgreen bg-opacity-40 relative w-48 h-32 mt-4 cursor-pointer") : ("bg-facefoodgreen bg-opacity-40 relative w-48 h-32 mt-4 cursor-pointer")}>
            <img class="absolute right bottom" src={dobraSvg} />
            <div class="p-2">
                <h3>{horario}</h3>
                <div>
                    <h2 class="text-0v5xl">{pratos}</h2>
                    <img src={require("../assets/comida1.png")} width="60%" class="rounded-50p ml-8 mt-1 border border-black" />
                </div>
            </div>
            <img class="items-center absolute top-middle" src={pinoSvg} />
        </div>
    )
}

export default Refeicao;