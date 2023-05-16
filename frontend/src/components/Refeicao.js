import React from "react"
import './style.css'
import dobraSvg from "../assets/dobra.svg"
import pinoSvg from "../assets/pino.svg"

const Refeicao = () => {
    return (
        <div class="bg-facefoodgreen bg-opacity-40 relative w-48 h-32 mt-4 cursor-pointer">
            <img class="absolute right bottom" src={dobraSvg}/>
                <img class="items-center absolute top-middle" src={pinoSvg}/>
        </div>
    )
}

export default Refeicao;