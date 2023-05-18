import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Publicacao from "../../components/Publicacao";
import { api } from "../../services/api";
import React, { useState, useEffect } from "react";
import axios from "axios";

function MinhasPublicacoes(){


    return(
      <div>
        <Header/>
 <div className="mx-16 mt-8">
        <section className="flex items-center justify-between">
          <div className="text-3xl font-bold font-poppins ml-4 mt-4">Minhas Publicações</div>
          <div className="relative ml-4 mr-5">
            <input type="text" className="border-2 border-red rounded-full py-2 px-4 w-64" placeholder="Pesquisar publicação" />
            <button type="submit" className="absolute right-0 top-0 mt-2.5 mr-4">
              <svg width="25" height="25" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Código do ícone de pesquisa */}
              </svg>
            </button>
          </div>
        </section>

        <div className="mt-5 mb-5 flex justify-center items-center">
        <Link
          to='/perfil'
          className="bg-red hover:bg-red-600 text-white font-bold py-2 px-4 rounded mb-5 ml-5"
        >
          Voltar
        </Link>
        <a className="bg-red hover:bg-red-600 text-white font-bold py-2 px-4 rounded mb-5 ml-5">
          + Adicionar Publicação
        </a>
      </div>
  
        <div className="mt-4 grid grid-cols-1 gap-4">
          <Publicacao />
          <Publicacao />
          <Publicacao />
        </div>
  
      </div>
      </div>
       
    );
}

export default MinhasPublicacoes;