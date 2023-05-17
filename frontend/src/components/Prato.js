import React from 'react';
import './style.css';

const Prato = () => {
    return (
        <div className="bg-DDE3CD p-4 flex flex-col items-center justify-center rounded-50p w-full">
            <img src={require("../assets/comida1.png")} alt="Imagem de comida." />
            <h2 className="mt-4 text-center font-bold">Frango com batata e ovos</h2>
            <p className="mt-4 text-center">Feito por: João Sales</p>
        </div>
    )
}

export default Prato;