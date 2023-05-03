import './style.css';
import Footer from '../../components/Footer';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
//Class Components
class Login extends Component{
  
  render(){
    return(
      <div>
      <header className="bg-FFF9F4 text-3D3D3D flex items-center justify-between shadow px-8 py-6">
      <a href="index.html"><img src={require("../../assets/logo.png")} alt="FaceFood" width="80%" /></a>
      <div className="flex items-center">
        <div className="ml-4 flex items-center">
        <Link to="/cadastro" className="ml-2 font-poppins font-bold text-sm text-3D3D3D border-2 border-gray-800 rounded-lg px-4 py-2 mt-4 hover:bg-gray-800 hover:text-white">
          Não tenho uma conta
      </Link>
        </div>
      </div>
    </header>

    <div className="grid grid-cols-2 px-8 py-6">
      <div className="h-full flex flex-col items-center justify-center">
        <img src={require("../../assets/Account-amico 1.png")} alt="Imagem de Login" width="67%" className="h-auto hover:transform hover:scale-105 transition duration-300 ease-in-out" />
        <p className="mt-4 text-center text-3xl font-bold font-poppins animate-typing">
          Faça o login e entre para<br />a nossa{" "}
          <span style={{ color: "red" }}>comunidade</span>
        </p>
      </div>

    
      <form
        className="h-full flex flex-col  bg-cinza border-2 border-black rounded-lg px-4 py-2 mt-4"
      >
        <p className="mt-4 text-center text-3xl font-bold font-poppins">
          Entrar
        </p>
        <label
          className="mt-4 text-xl font-bold font-poppins"
          htmlFor="user-email-input"
        >
          Email
        </label>
        <input
          className="border-2 border-gray-500 rounded-lg p-2 col-span-2 mt-2"
          type="email"
          placeholder="Email"
        />

        <label
          className="mt-4 text-xl font-bold font-poppins"
          htmlFor="user-senha-input"
        >
          Senha
        </label>
        <input
          className="border-2 border-gray-500 rounded-lg p-2 col-span-2 mt-2"
          type="password"
          placeholder="Senha"
        />
        <p
          className="mt-4 text-end text-xl font-bold font-poppins underline"
         
        >
          Esqueci minha senha
        </p>
        <Link
          to="/perfil/jovitif"
          className="inline-block px-4 py-2 mt-20 text-sm font-medium leading-5 text-white bg-red-600 border border-transparent rounded-lg hover:bg-red-700 focus:outline-none focus:shadow-outline-red active:bg-red-800 text-center"
        >
          Vamos lá!
        </Link>
      </form>
    </div>

      <Footer />
      </div>
  );
  }
}

export default Login;