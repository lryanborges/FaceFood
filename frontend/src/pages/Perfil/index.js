import './style.css';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Perfil() {

  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(localStorage.getItem('username'))
  })

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Header />
      <div class="ml-8 mt-8">
        <h1 class="text-3xl font-bold c-3D3D3D">Detalhar</h1>
        <h2 class="text-3xl font-light c-FF0038 ml-20">Perfil</h2>
      </div>
      <div class="max-w-lg mx-auto">
        <div class="flex justify-center">
          <img src={""} alt="Foto de perfil" class="w-32 h-32 rounded-full border-2 border-gray-400" />
        </div>
        <div class="mt-6">
          <h2 class="text-3xl font-bold text-gray-800">{}</h2>
          <p class="text-gray-600">@{username}</p>
        </div>
        <div class="mt-6 border-t border-gray-300 pt-6">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <p class="text-gray-700 font-semibold">Altura:</p>
              <p class="text-gray-600">{} m</p>
            </div>
            <div>
              <p class="text-gray-700 font-semibold">Sexo:</p>
              <p class="text-gray-600">{}</p>
            </div>
            <div>
              <p class="text-gray-700 font-semibold">Peso:</p>
              <p class="text-gray-600">{} kg</p>
            </div>
            <div>
              <p class="text-gray-700 font-semibold">Data Nascimento:</p>
              <p class="text-gray-600">{}</p>
            </div>
            <div>
              <p class="text-gray-700 font-semibold">Objetivo:</p>
              <p class="text-gray-600">{}</p>
            </div>
        <div>
          <p class="text-gray-700 font-semibold">Preferência de dieta:</p>
          <p class="text-gray-600">{}</p>
        </div>
        <div class="col-span-2">
          <p class="text-gray-700 font-semibold">Preferência de alimentos:</p>
          <p class="text-gray-600">{}</p>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-facefoodgreen w-semifull rounded h-0v5 mx-16 mt-16"></div>
  
  <div class="flex justify-center mt-8 mb-8">
    <a onclick="abrirPopup()"
      class="bg-red hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-4 cursor-pointer">
      Editar Perfil
    </a>
    <Link to="/ingredientes" class="bg-red hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-4">
      Ingredientes
    </Link>
    <Link to="/pratos" class="bg-red hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-4">
      Pratos
    </Link>
    <Link to="/publicacoes" class="bg-red hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-4">
      Publicações
    </Link>
    <Link to="/refeicoes" class="bg-red hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-4">
      Refeições
    </Link>
    <Link to="/planejamento" class="bg-red hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
      Rotina
    </Link>
  </div>
            <Footer/>
        </div>
    );
}

export default Perfil;