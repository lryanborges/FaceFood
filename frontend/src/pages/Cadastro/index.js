import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Footer from "../../components/Footer";
import "./style.css";
import {api} from '../../services/api';
import bcrypt from "bcryptjs"
import logoSvg from "../../assets/logo.svg";

function Cadastro() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');

  const [codificada, setCodificada] = useState('');
  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('As senhas não coincidem');
      return;
    }

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, (err, hash) => {
        setCodificada(hash);
      });
    });

    const newUser = {
      email:email,
      senha:codificada,
    };

    try {
      const response = await api.post('/api/user', newUser);

      if (response.data) {
        navigate('/login');
      }
    } catch (error) {
      alert('Ocorreu um erro ao cadastrar o usuário');
      console.error(error);
    }
  }


  return (
    <div>
      <header className="bg-FFF9F4 text-3D3D3D flex items-center justify-between shadow px-8 py-6">
        <Link to ="../dashboard"><img src={logoSvg} alt="FaceFood" width="80%" /></Link>
        <div className="flex items-center">
          <div className="ml-4 flex items-center">
            <Link to="../login" className="ml-2 font-poppins font-bold text-sm text-3D3D3D border-2 border-gray-800 rounded-lg px-4 py-2 mt-4 hover:bg-gray-800 hover:text-white">
              Já tem uma conta ?
            </Link>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-2 px-8 py-6">
        <div className="h-full flex flex-col items-center justify-center">
          <p className="mt-4 text-center text-3xl font-bold font-poppins animate-typing">
            Crie uma conta e  <br /> participe da nossa <br /> <span style={{ color: "#ff0038" }}>comunidade</span>
          </p>
          <img src={require("../../assets/cadastro.png")} alt="Imagem de Cadastro" width="60%" className="h-auto hover:transform hover:scale-105 transition duration-300 ease-in-out" />
        </div>
        <form onSubmit={handleRegister} className="h-full flex flex-col  bg-cinza border-2 border-black rounded-lg px-4 py-2 mt-4">
          <p className="mt-4 text-center text-3xl font-bold font-poppins">
            Cadastrar
          </p>
          <label className="mt-4 text-xl font-bold font-poppins" htmlFor="user-nome-input">
            Nome
          </label>
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" required className="border-2 border-gray-500 rounded-lg p-2 col-span-2 mt-2" placeholder="Nome" />
          <label className="mt-4 text-xl font-bold font-poppins" htmlFor="user-email-input">
            Email
          </label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" required className="border-2 border-gray-500 rounded-lg p-2 col-span-2 mt-2" placeholder="Email" />
          <label className="mt-4 text-xl font-bold font-poppins" htmlFor="user-senha-input">
            Senha
          </label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required className="border-2 border-gray-500 rounded-lg p-2 col-span-2 mt-2" placeholder="Senha" />
          <label className="mt-4 text-xl font-bold font-poppins" htmlFor="user-senhaconfirmar-input">
            Senha Confirmar
          </label>
          <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" required className="border-2 border-gray-500 rounded-lg p-2 col-span-2 mt-2" placeholder="Confirmar Senha" />
          <label className="mt-4 text-xl font-bold font-poppins" htmlFor="user-usuario-input">
            Nome de Usuário
          </label>
          <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" required className="border-2 border-gray-500 rounded-lg p-2 col-span-2 mt-2" placeholder="Usuario" pattern="^[^\s]+$" title="Não são permitidos espaços neste campo" />
          <button onClick={handleRegister}><Link type="submit" className="inline-block px-4 py-2 mt-20 text-sm font-medium leading-5 text-white bg-facefoodred border border-transparent rounded-lg hover:bg-red-700 focus:outline-none focus:shadow-outline-red active:bg-red-800 text-center">
            Vamos lá!
          </Link></button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Cadastro;