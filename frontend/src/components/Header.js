import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import logoSvg from "../assets/logo.svg";
import { Context } from '../context/AuthContext';

function Header() {
  const [username, setUsername] = useState('');
  const [profilePicture, setProfilePicture] = useState('');

  const {handleLogout} = useContext(Context);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/user'); 
        const data = await response.json();
        setUsername(data.username);
        setProfilePicture(data.profilePicture);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserData();
  }, []);



  return (
    <header className="bg-FFF9F4 text-3D3D3D flex items-center justify-between shadow px-8 py-6">
      <Link to='/homepage'>
        <img src={logoSvg} alt="FaceFood" width="80%" />
      </Link>
      <div className="flex items-center">
        <button className="md:hidden">
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
            <path
              fillRule="evenodd"
              d="M3 4h14a1 1 0 010 2H3a1 1 0 010-2zm0 6h14a1 1 0 010 2H3a1 1 0 110-2zm14 5H3a1 1 0 110-2h14a1 1 0 110 2z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="ml-4 flex items-center">
          <Link to="/perfil"><img src={profilePicture} alt="Imagem de perfil" className="w-10 h-10 rounded-full" /></Link>
          
          <div className="ml-2 font-poppins font-medium text-sm text-3D3D3D flex items-center">
            <a href="../dist/detalhar-perfil.html">{username}</a>
          </div>
        </div>
        <button className="ml-4" onClick={handleLogout}>

          <Link to="">
            <img src={require("../assets/botao.png")} alt="Botão" className="w-10 h-10" />
          </Link>
        </button>
      </div>
    </header>
  );
}

export default Header;