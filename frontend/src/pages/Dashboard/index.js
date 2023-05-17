import React, { useContext, useState } from 'react';
import './style.css';
import Footer from "../../components/Footer";
import Opcoes from "../../components/Opcoes"
import { Link } from 'react-router-dom';
import Cadastro from '../Cadastro';

import menuSvg from '../../assets/menu.svg';
import mulherComendoSvg from "../../assets/Eating healthy food-pana-red.svg";
import mulherPostandoSvg from "../../assets/Image post-bro.svg";
import topSvg from "../../assets/top-post-2.svg";
import bottomSvg from "../../assets/bottom-post-1.svg";
import logoSvg from "../../assets/logo.svg"
import { Context } from '../../context/AuthContext';


export default function Dashboard() {

    const[email, setEmail] = useState("");
    const[senha, setSenha] = useState("");

    const {handleLogin} = useContext(Context);

    const login = async (e) => {
        e.preventDefault();

        if (!email || !senha) {
            alert("Insina o e-mail e a senha.");
            return;
          }
      
          if (!email.includes("@")) {
            alert("E-mail inválido.");
            return;
          }

        handleLogin({email, senha});
    }

    return (
        <div class="bg-facefoodgreen">
            <header class="flex wrap justify-between items-center">
                <a href="index.html"><img class="mt-3 ml-6" src={logoSvg} alt="FaceFood" width="80%" /></a>
                <form className="flex gap-2 wrap mr-16 mt-4">
                    <input className="bg-brancoamarelado border-2 border-facefoodred rounded p-1 w-84" type="text"
                        placeholder="  Email ou Usuário" id="email" name="email" 
                        onChange={e => setEmail(e.target.value)}
                        required />
                    <input className="bg-brancoamarelado relative border-2 border-facefoodred rounded p-1 w-64" type="password"
                        placeholder=" Senha" id="senha" name="senha" 
                        onChange={e => setSenha(e.target.value)}
                        required />
                    <button
                        className="border rounded p-2 px-8 bg-facefoodred c-F7FEE5 cursor-pointer font-semibold" type="button"
                        value="Entrar" onClick={login}>Entrar</button>
                    <a className="absolute r-4 t-2 c-001701 underline font-medium" href="criar-conta.html">Não tenho uma conta!</a>
                </form>
            </header>

            <main class="bg-brancoamarelado main mt-20 px-8 p-4 m-32">
                <div class="flex mt-8">
                    <div class="flex">
                        <img src={menuSvg} />
                        <h2 class="c-272727 font-bold text-3xl ml-2">Menu Principal</h2>
                    </div>
                    <form>
                        <div class="flex right">
                            <input class="bg-brancoamarelado border-2 border-facefoodred rounded p-1 w-96 ml-82" type="text"
                                placeholder="  Pesquise aqui!" />
                            <button type="submit" class="bg-facefoodred p-1 px-4 rounded ml--4">
                                <svg width="28" height="28" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M36.7499 36.7499L27.6552 27.6552M27.6552 27.6552C30.1167 25.1936 31.4995 21.8551 31.4995 18.374C31.4995
                             14.8929 30.1167 11.5544 27.6552 9.0929C25.1936 6.6314 21.8551 5.24854 18.374 5.24854C14.8929 5.24854 11.5544 
                             6.6314 9.0929 9.0929C6.6314 11.5544 5.24854 14.8929 5.24854 18.374C5.24854 21.8551 6.6314 25.1936 9.0929 
                             27.6552C11.5544 30.1167 14.8929 31.4995 18.374 31.4995C21.8551 31.4995 25.1936 30.1167 27.6552 27.6552Z"
                                        stroke="#F1F9E4" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>

                <div class="grid-2 bg-facefoodgreen px-8 rounded mt-16">
                    <div class="self-center mt-2">
                        <h1 class="textatt-5xl font-bold c-3D3D3D"><span class="c-B7004B">Planeje</span> a sua rotina alimentar
                            saudável</h1>
                        <p class="mt-2 ml-1 c-C68484 font-light text-1v5xl">Participe da nossa comunidade!</p>
                        <Link to="../cadastro"><button
                            class="textatt-2xl mt-6 ml-40 bg-facefoodred rounded p-6 px-12 c-F7FEE5 font-bold"
                            type="submit">Começar!</button></Link>
                    </div>
                    <div>
                        <img class="relative mb--28 z-10 ml-16" src={mulherComendoSvg} width="80%"
                            alt="Imagem de mulher comendo comida saudável" />
                        <img class="mt--16 absolute ml-5" src={bottomSvg} />
                    </div>
                </div>

                <div class="mx-8 mt-48 my-16">
                    <Opcoes />
                </div>

                <div>
                    <img class="mb--32" src={topSvg} />
                    <div class="mt-4 grid-2 grid-2 bg-facefoodgreen px-8 p-4 rounded">
                        <div>
                            <img class="mt--24 ml-6" src={mulherPostandoSvg} width="80%"
                                alt="Imagem de mulher compartilhando uma receita" />
                        </div>
                        <div class="self-center mt-2">
                            <h1 class="textatt-5xl font-bold c-3D3D3D"><span class="c-B7004B">Veja</span> e <span
                                class="c-B7004B">compartilhe</span> pratos mega variados</h1>
                            <p class="mt-2 ml-1 c-C68484 font-light text-1v5xl">Participe da nossa comunidade!</p>
                            <Link to="../cadastro"><button
                                class="textatt-2xl mt-6 ml-32 bg-facefoodred rounded p-6 px-12 c-F7FEE5 font-bold"
                                type="submit">Conheça!</button></Link>
                        </div>
                    </div>
                </div>

                <section class="mt-16">
                    <h3 class="text-4xl c-3D3D3D font-bold">Pratos populares.</h3>
                    <div class="flex justify-between mx-16 my-12">
                        <div>
                            <img class="rounded" src={require("../../assets/comida1.png")} alt="Foto de frango com batatas e ovos."
                                width="260px" />
                            <h5 class="font-bold c-3D3D3D text-1v3xl ml-1 mt-1">Frango com batatas e ovos</h5>
                            <p class="float-right font-light c-3D3D3D text-0v5xl">por JoãoSales123</p>
                        </div>
                        <div>
                            <img class="rounded" src={require("../../assets/comida1.png")} alt="Foto de frango com batatas e ovos."
                                width="260px" />
                            <h5 class="font-bold c-3D3D3D text-1v3xl ml-1 mt-1">Frango com batatas e ovos</h5>
                            <p class="float-right font-light c-3D3D3D text-0v5xl">por JoãoSales123</p>
                        </div>
                        <div>
                            <img class="rounded" src={require("../../assets/comida1.png")} alt="Foto de frango com batatas e ovos."
                                width="260px" />
                            <h5 class="font-bold c-3D3D3D text-1v3xl ml-1 mt-1">Frango com batatas e ovos</h5>
                            <p class="float-right font-light c-3D3D3D text-0v5xl">por JoãoSales123</p>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );

}

export { Dashboard };